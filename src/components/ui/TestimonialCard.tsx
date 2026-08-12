import type { TestimonialConfig } from "@/prospects/types";
import { ImageWithFallback } from "./ImageWithFallback";
import { Icon } from "./Icon";

const fallbackAvatar = {
  src: "/assets/placeholders/avatar.svg",
  alt: "Avatar demonstrativo substituível",
  width: 96,
  height: 96
};

type TestimonialCardProps = {
  testimonial: TestimonialConfig;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article className="testimonial-card">
      <div className="testimonial-card__header">
        {testimonial.avatar?.src ? (
          <ImageWithFallback
            className="testimonial-card__avatar"
            fallback={fallbackAvatar}
            image={testimonial.avatar}
          />
        ) : (
          <span aria-hidden="true" className="testimonial-card__avatar testimonial-card__avatar--initials">
            {initials}
          </span>
        )}
        <div className="testimonial-card__identity">
          <h3>{testimonial.name}</h3>
          {testimonial.service ? <p>{testimonial.service}</p> : null}
        </div>
        <span className="testimonial-card__verified" title="Avaliação publicada no Google">
          <Icon name="check" />
        </span>
      </div>
      {testimonial.rating ? (
        <div aria-label={`${testimonial.rating} estrelas`} className="testimonial-card__stars">
          {Array.from({ length: Math.min(5, Math.round(testimonial.rating)) }).map((_, index) => (
            <Icon key={index} name="star" />
          ))}
        </div>
      ) : null}
      <p className="testimonial-card__text">“{testimonial.text}”</p>
      <div className="testimonial-card__footer">
        {testimonial.isPlaceholder ? <span>Placeholder - substitua por avaliação real</span> : null}
        {testimonial.source ? <span>{testimonial.source}</span> : null}
        {testimonial.sourceUrl ? (
          <a href={testimonial.sourceUrl} rel="noreferrer" target="_blank">
            Ver avaliação
            <Icon name="arrow-right" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
