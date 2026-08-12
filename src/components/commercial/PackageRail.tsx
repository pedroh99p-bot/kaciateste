"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type PackageRailProps = {
  children: ReactNode;
  itemCount: number;
};

export function PackageRail({ children, itemCount }: PackageRailProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const updateActiveIndex = () => {
      const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-package-card]"));
      const trackStart = track.scrollLeft + 16;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - trackStart);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex(nearestIndex);
    };

    updateActiveIndex();
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      track.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, []);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    const cards = track
      ? Array.from(track.querySelectorAll<HTMLElement>("[data-package-card]"))
      : [];
    const nextIndex = Math.min(Math.max(activeIndex + direction, 0), cards.length - 1);

    cards[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  return (
    <div className="package-rail">
      <div
        aria-label="Pacotes disponíveis"
        aria-roledescription="carrossel"
        className="packages__grid"
        ref={trackRef}
        role="region"
        tabIndex={0}
      >
        {children}
      </div>
      <div className="package-rail__footer">
        <p aria-live="polite" className="package-rail__status">
          <strong>{activeIndex + 1}</strong> de {itemCount}
        </p>
        <div aria-label="Controles dos pacotes" className="package-rail__controls">
          <button
            aria-label="Ver pacote anterior"
            disabled={activeIndex === 0}
            onClick={() => move(-1)}
            type="button"
          >
            <Icon name="chevron-right" />
          </button>
          <button
            aria-label="Ver próximo pacote"
            disabled={activeIndex === itemCount - 1}
            onClick={() => move(1)}
            type="button"
          >
            <Icon name="chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
