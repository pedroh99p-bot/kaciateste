"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { Icon } from "@/components/ui/Icon";

type ServicesCarouselProps = {
  children: ReactNode;
};

export function ServicesCarousel({ children }: ServicesCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  function move(direction: -1 | 1) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.82, 280),
      behavior: "smooth"
    });
  }

  return (
    <div className="services-carousel">
      <div aria-label="Controles do carrossel de serviços" className="services-carousel__controls">
        <button
          aria-label="Ver serviços anteriores"
          className="services-carousel__button services-carousel__button--previous"
          onClick={() => move(-1)}
          type="button"
        >
          <Icon name="arrow-right" />
        </button>
        <button
          aria-label="Ver próximos serviços"
          className="services-carousel__button"
          onClick={() => move(1)}
          type="button"
        >
          <Icon name="arrow-right" />
        </button>
      </div>
      <div className="services__grid services__grid--carousel" ref={trackRef} tabIndex={0}>
        {children}
      </div>
    </div>
  );
}
