import type { CSSProperties } from "react";
import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { HighlightText } from "@/components/ui/HighlightText";
import { Icon } from "@/components/ui/Icon";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

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
            {prospect.copy.heroProofs.map((chip) => (
              <Chip
                key={chip.label}
                icon={chip.icon}
                image={chip.image}
                label={chip.label}
                stars={chip.stars}
              />
            ))}
          </div>
          <div className="hero__actions">
            <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
              {prospect.copy.heroPrimaryCta}
            </Button>
            <Button href="#pacotes" icon="arrow-right" variant="secondary">
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
    </section>
  );
}
