import type { CSSProperties } from "react";
import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { QuickConsult } from "@/components/quiz/QuickConsult";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { HighlightText } from "@/components/ui/HighlightText";
import { Icon } from "@/components/ui/Icon";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { StatCard } from "@/components/ui/StatCard";

type HeroSectionProps = {
  prospect: ResolvedProspect;
};

type HeroStyle = CSSProperties & {
  "--hero-background-image"?: string;
  "--hero-background-position-mobile"?: string;
  "--hero-background-position-desktop"?: string;
};

export function HeroSection({ prospect }: HeroSectionProps) {
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "hero"
  });
  const hasHeroBackground = Boolean(prospect.assets.backgroundTexture);
  const heroStyle = hasHeroBackground
    ? ({
        "--hero-background-image": `url("${prospect.assets.backgroundTexture}")`,
        "--hero-background-position-mobile": prospect.layout.heroBackgroundPositionMobile,
        "--hero-background-position-desktop": prospect.layout.heroBackgroundPositionDesktop
      } as HeroStyle)
    : undefined;

  return (
    <section
      className={`hero section${hasHeroBackground ? " hero--has-background" : ""}`}
      data-section-tone="dark"
      id="inicio"
      style={heroStyle}
    >
      <div className="hero__background" aria-hidden="true" />
      <div className="hero__content">
        <Reveal>
          <p className="eyebrow hero__eyebrow">
            <Icon className="eyebrow__icon" name="shield" />
            <span>{prospect.copy.heroEyebrow}</span>
          </p>
          <h1>
            <HighlightText copy={prospect.copy.heroHeadline} />
          </h1>
          <p className="hero__subtitle">{prospect.copy.heroSubtitle}</p>
          <div className="hero__chips">
            {prospect.specialist.chips.slice(0, 3).map((chip) => (
              <Chip key={chip.label} icon={chip.icon} label={chip.label} />
            ))}
          </div>
          {prospect.canShowProof ? (
            <div className="hero__stats">
              {prospect.proof.rating ? (
                <StatCard decimals={1} icon="star" label={prospect.proof.sourceLabel ?? "avaliação"} value={prospect.proof.rating} />
              ) : null}
              {prospect.proof.reviewCount ? (
                <StatCard icon="message" label="avaliações" value={prospect.proof.reviewCount} />
              ) : null}
              {prospect.proof.yearsExperience ? (
                <StatCard icon="calendar" label="anos de experiência" suffix="+" value={prospect.proof.yearsExperience} />
              ) : null}
              {prospect.proof.clientsServed ? (
                <StatCard icon="user" label="clientes atendidos" suffix="+" value={prospect.proof.clientsServed} />
              ) : null}
            </div>
          ) : null}
          <div className="hero__actions">
            <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
              {prospect.copy.heroPrimaryCta}
            </Button>
            <Button href="#servicos" icon="arrow-right" variant="secondary">
              {prospect.copy.heroSecondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
      {hasHeroBackground ? null : (
        <Reveal className="hero__visual" preset="image-reveal">
          <ImageWithFallback
            className="hero__person"
            fallback={prospect.assets.symbol}
            image={prospect.assets.heroSpecialist ?? prospect.assets.specialistPortrait}
            loading="eager"
            sizes="(min-width: 900px) 48vw, 100vw"
          />
        </Reveal>
      )}
      <Reveal className="hero__consult" delay={120}>
        <QuickConsult prospect={prospect} />
      </Reveal>
    </section>
  );
}
