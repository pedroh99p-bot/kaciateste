import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { HighlightText } from "@/components/ui/HighlightText";
import { Icon } from "@/components/ui/Icon";
import { RenewalPriceList } from "@/components/ui/RenewalPriceList";

type CrafRenewalSectionProps = {
  prospect: ResolvedProspect;
};

export function CrafRenewalSection({ prospect }: CrafRenewalSectionProps) {
  const renewal = prospect.renewal;

  if (!renewal.enabled || renewal.prices.length === 0) {
    return null;
  }

  const href = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "renovacao-craf",
    selectedService: "Renovação de CRAF",
    customerMessage: renewal.whatsappMessage
  });

  return (
    <section className="section renewal" data-section-tone="dark" id="renovacao-craf">
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
          <Button href={href} icon="whatsapp" variant="whatsapp">
            {renewal.ctaLabel}
          </Button>
        </Reveal>
        <Reveal className="renewal__prices" delay={80}>
          <RenewalPriceList
            additionalLabel={renewal.additionalLabel}
            items={renewal.prices}
          />
          {renewal.disclaimer ? (
            <p className="commercial-disclaimer">{renewal.disclaimer}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
