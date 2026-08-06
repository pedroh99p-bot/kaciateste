import type { ResolvedProspect } from "@/prospects/types";
import { Reveal } from "@/components/animations/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

type TestimonialsSectionProps = {
  prospect: ResolvedProspect;
};

export function TestimonialsSection({ prospect }: TestimonialsSectionProps) {
  if (!prospect.testimonials.enabled || prospect.testimonials.items.length === 0) {
    return null;
  }

  const ratingLabel =
    typeof prospect.proof.rating === "number"
      ? prospect.proof.rating.toLocaleString("pt-BR", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        })
      : null;
  const sourceIcon = prospect.assets.testimonialAvatars[0] ?? prospect.assets.symbol;

  return (
    <section className="section testimonials" data-section-tone="medium" id="depoimentos">
      <Reveal>
        <SectionHeading
          eyebrow={prospect.copy.testimonialsEyebrow}
          headline={prospect.copy.testimonialsHeadline}
          icon="message"
        />
      </Reveal>
      {prospect.canShowProof ? (
        <Reveal delay={40}>
          <div className="testimonials-summary" aria-label="Resumo das avaliações">
            <div className="testimonials-summary__source">
              <ImageWithFallback
                className="testimonials-summary__source-icon"
                fallback={prospect.assets.symbol}
                image={sourceIcon}
              />
              <span>{prospect.proof.sourceLabel ?? "Avaliações"}</span>
            </div>
            {ratingLabel ? <strong>{ratingLabel}</strong> : null}
            {prospect.proof.rating ? (
              <div
                aria-label={`${ratingLabel} estrelas`}
                className="testimonials-summary__stars"
              >
                {Array.from({ length: Math.min(5, Math.round(prospect.proof.rating)) }).map((_, index) => (
                  <Icon key={index} name="star" />
                ))}
              </div>
            ) : null}
            {prospect.proof.reviewCount ? (
              <p>{prospect.proof.reviewCount} avaliações no Google</p>
            ) : null}
          </div>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <TestimonialsCarousel testimonials={prospect.testimonials} />
      </Reveal>
    </section>
  );
}
