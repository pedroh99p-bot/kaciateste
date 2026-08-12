"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import type { LayoutConfig } from "@/prospects/types";

type PageProgressProps = {
  config: LayoutConfig["pageProgress"];
};

type ProgressStyle = CSSProperties & {
  "--page-progress": string;
};

export function PageProgress({ config }: PageProgressProps) {
  const [availableIds, setAvailableIds] = useState<string[]>(() => config.sections.map((section) => section.id));
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = useMemo(
    () => config.sections.filter((section) => availableIds.includes(section.id)),
    [availableIds, config.sections]
  );

  useEffect(() => {
    if (!config.enabled) {
      return;
    }

    const presentSections = config.sections.filter((section) => document.getElementById(section.id));
    setAvailableIds(presentSections.map((section) => section.id));

    let animationFrame = 0;

    function updateProgress() {
      animationFrame = 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const nextProgress = Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100));
      const marker = Math.min(window.innerHeight * 0.38, 320);
      let nextIndex = 0;

      presentSections.forEach((section, index) => {
        const element = document.getElementById(section.id);

        if (element && element.getBoundingClientRect().top <= marker) {
          nextIndex = index;
        }
      });

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        nextIndex = Math.max(0, presentSections.length - 1);
      }

      setProgress((current) => Math.abs(current - nextProgress) > 0.1 ? nextProgress : current);
      setActiveIndex((current) => current === nextIndex ? current : nextIndex);
    }

    function scheduleUpdate() {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    }

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [config.enabled, config.sections]);

  if (!config.enabled || sections.length === 0) {
    return null;
  }

  const safeActiveIndex = Math.min(activeIndex, sections.length - 1);
  const activeSection = sections[safeActiveIndex];

  return (
    <nav
      aria-label="Progresso pelas seções da página"
      className="page-progress"
      style={{ "--page-progress": `${progress}%` } as ProgressStyle}
    >
      <div className="page-progress__meta">
        <span>Você está em</span>
        <strong aria-live="polite">{activeSection.label}</strong>
        <span>{safeActiveIndex + 1} de {sections.length}</span>
      </div>
      <div
        aria-label={`${Math.round(progress)}% da página percorrida`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(progress)}
        className="page-progress__track"
        role="progressbar"
      >
        <span className="page-progress__fill" />
        <ol style={{ gridTemplateColumns: `repeat(${sections.length}, minmax(0, 1fr))` }}>
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                aria-current={index === safeActiveIndex ? "step" : undefined}
                className={index <= safeActiveIndex ? "is-reached" : undefined}
                href={`#${section.id}`}
                title={section.label}
              >
                <span>{section.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
