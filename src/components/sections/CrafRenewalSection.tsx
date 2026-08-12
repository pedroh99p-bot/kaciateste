import type { ResolvedProspect } from "@/prospects/types";
import { Reveal } from "@/components/animations/Reveal";
import { RenewalConfigurator } from "@/components/commercial/RenewalConfigurator";
import { HighlightText } from "@/components/ui/HighlightText";
import { Icon } from "@/components/ui/Icon";

type CrafRenewalSectionProps = {
  prospect: ResolvedProspect;
};

export function CrafRenewalSection({ prospect }: CrafRenewalSectionProps) {
  const renewal = prospect.renewal;

  if (!renewal.enabled || renewal.prices.length === 0) {
    return null;
  }

  return (
    <section className="section renewal commercial-section" data-section-tone="dark" id="renovacao-craf">
      <div className="renewal__layout">
        <Reveal className="renewal__content">
          <p className="eyebrow">
            <Icon className="eyebrow__icon" name="calendar" />
            <span>{renewal.eyebrow}</span>
          </p>
          <h2>
            <HighlightText copy={renewal.headline} />
          </h2>
          <p className="renewal__subtitle">{renewal.subtitle}</p>
          <p className="renewal__description">{renewal.description}</p>
        </Reveal>
        <Reveal className="renewal__prices" delay={80}>
          <RenewalConfigurator
            additionalLabel={renewal.additionalLabel}
            benefits={renewal.benefits}
            ctaLabel={renewal.ctaLabel}
            defaultMessage={prospect.contact.defaultMessage}
            initialQuantity={renewal.initialQuantity}
            options={renewal.prices}
            phone={prospect.contact.whatsapp}
            whatsappMessage={renewal.whatsappMessage}
          />
          {renewal.disclaimer ? (
            <p className="commercial-disclaimer">{renewal.disclaimer}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
