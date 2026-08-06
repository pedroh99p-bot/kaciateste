"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import type { AssetImage, PreloaderConfig } from "@/prospects/types";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type CurtainPreloaderProps = {
  preloader: PreloaderConfig;
  logo: AssetImage;
};

type PreloaderStyle = CSSProperties & {
  "--preloader-intro-duration": string;
  "--preloader-duration": string;
  "--preloader-total-duration": string;
};

export function CurtainPreloader({ preloader, logo }: CurtainPreloaderProps) {
  const introDuration = Math.max(420, Math.round(preloader.duration * 0.45));
  const exitDuration = Math.max(720, preloader.duration);
  const [phase, setPhase] = useState<"hidden" | "enter" | "leave">(
    preloader.enabled ? "enter" : "hidden"
  );

  useEffect(() => {
    if (!preloader.enabled) {
      return;
    }

    document.body.classList.remove("preloader-finished", "preloader-leaving");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const storageKey = "despachante-preloader-seen";
    const session = (() => {
      try {
        return window.sessionStorage;
      } catch {
        return null;
      }
    })();

    if (preloader.showOncePerSession && session?.getItem(storageKey)) {
      setPhase("hidden");
      document.body.classList.add("preloader-finished");
      return;
    }

    if (prefersReducedMotion) {
      setPhase("hidden");
      document.body.classList.add("preloader-finished");
      if (preloader.showOncePerSession) {
        session?.setItem(storageKey, "true");
      }
      return;
    }

    document.body.classList.add("preloader-active");
    setPhase("enter");

    const leaveTimer = window.setTimeout(() => {
      document.body.classList.add("preloader-leaving");
      setPhase("leave");
    }, introDuration);

    const cleanupTimer = window.setTimeout(() => {
      setPhase("hidden");
      document.body.classList.remove("preloader-active", "preloader-leaving");
      document.body.classList.add("preloader-finished");
      if (preloader.showOncePerSession) {
        session?.setItem(storageKey, "true");
      }
    }, introDuration + exitDuration + 140);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(cleanupTimer);
      document.body.classList.remove("preloader-active", "preloader-leaving");
    };
  }, [exitDuration, introDuration, preloader]);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      aria-label="Preparando demonstracao"
      aria-live="polite"
      className={`curtain-preloader curtain-preloader--${phase}`}
      style={
        {
          "--preloader-intro-duration": `${introDuration}ms`,
          "--preloader-duration": `${exitDuration}ms`,
          "--preloader-total-duration": `${introDuration + exitDuration + 140}ms`
        } as PreloaderStyle
      }
    >
      <div className="curtain-preloader__panel">
        <ImageWithFallback className="curtain-preloader__logo" fallback={logo} image={logo} />
        <span className="curtain-preloader__pulse" />
        <p>Preparando atendimento</p>
      </div>
      <span className="curtain-preloader__curtain" />
    </div>
  );
}
