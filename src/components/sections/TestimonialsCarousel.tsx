"use client";

import { useEffect, useRef, useState } from "react";
import type { TestimonialsConfig } from "@/prospects/types";
import { Icon } from "@/components/ui/Icon";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

type TestimonialsCarouselProps = {
  testimonials: TestimonialsConfig;
};

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const items = testimonials.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  useEffect(() => () => window.cancelAnimationFrame(frameRef.current), []);

  if (items.length === 0) {
    return null;
  }

  function getSlides() {
    return Array.from(viewportRef.current?.querySelectorAll<HTMLElement>(".testimonials-carousel__slide") ?? []);
  }

  function updateActiveIndex() {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
    const slides = getSlides();
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((current) => current === closestIndex ? current : closestIndex);
  }

  function handleScroll() {
    window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(updateActiveIndex);
  }

  function goTo(index: number) {
    const safeIndex = Math.min(items.length - 1, Math.max(0, index));
    const slide = getSlides()[safeIndex];

    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActiveIndex(safeIndex);
  }

  return (
    <div aria-label="Avaliações de clientes no Google" aria-roledescription="carrossel" className="testimonials-carousel" role="region">
      <div className="testimonials-carousel__controls">
        <p aria-live="polite">Avaliação {activeIndex + 1} de {items.length}</p>
        <div>
          <button
            aria-label="Ver avaliação anterior"
            disabled={activeIndex === 0}
            onClick={() => goTo(activeIndex - 1)}
            type="button"
          >
            <Icon name="chevron-right" />
          </button>
          <button
            aria-label="Ver próxima avaliação"
            disabled={activeIndex === items.length - 1}
            onClick={() => goTo(activeIndex + 1)}
            type="button"
          >
            <Icon name="chevron-right" />
          </button>
        </div>
      </div>
      <div className="testimonials-carousel__viewport" onScroll={handleScroll} ref={viewportRef} tabIndex={0}>
        <div className="testimonials-carousel__track">
          {items.map((testimonial, index) => (
            <div
              aria-label={`${index + 1} de ${items.length}`}
              aria-roledescription="slide"
              className="testimonials-carousel__slide"
              key={`${testimonial.name}-${testimonial.sourceUrl ?? index}`}
              role="group"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      <div aria-label="Escolher avaliação" className="testimonials-carousel__dots">
        {items.map((testimonial, index) => (
          <button
            aria-label={`Ir para avaliação de ${testimonial.name}`}
            aria-pressed={activeIndex === index}
            className={activeIndex === index ? "is-active" : undefined}
            key={`${testimonial.name}-dot`}
            onClick={() => goTo(index)}
            type="button"
          />
        ))}
      </div>
      <p className="testimonials-carousel__hint">Deslize ou use as setas para conferir as avaliações</p>
    </div>
  );
}
