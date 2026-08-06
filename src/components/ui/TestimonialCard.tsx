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
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__header">
        <ImageWithFallback
          className="testimonial-card__avatar"
          fallback={fallbackAvatar}
          image={testimonial.avatar}
        />
        <div>
          <h3>{testimonial.name}</h3>
          {testimonial.service ? <p>{testimonial.service}</p> : null}
        </div>
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
      </div>
    </article>
  );
}
