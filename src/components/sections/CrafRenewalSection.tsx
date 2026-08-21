import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { RenewalConfigurator } from "@/components/commercial/RenewalConfigurator";
import { Button } from "@/components/ui/Button";
import { HighlightText } from "@/components/ui/HighlightText";
import { Icon } from "@/components/ui/Icon";

type CrafRenewalSectionProps = {
  prospect: ResolvedProspect;
};

export function CrafRenewalSection({ prospect }: CrafRenewalSectionProps) {
  const renewal = prospect.renewal;
  const hasPriceOptions = renewal.prices.length > 0;
  const renewalTopic = [renewal.headline.before, renewal.headline.highlight, renewal.headline.after]
    .filter(Boolean)
    .join(" ");
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "renovacao-craf",
    selectedService: renewalTopic,
    customerMessage: renewal.whatsappMessage
  });

  if (!renewal.enabled) {
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
          {hasPriceOptions ? <p className="renewal__subtitle">{renewal.subtitle}</p> : null}
          <p className="renewal__description">{renewal.description}</p>
        </Reveal>
        <Reveal className={hasPriceOptions ? "renewal__prices" : "renewal__consultation"} delay={80}>
          {hasPriceOptions ? (
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
          ) : (
            <div className="renewal-consultation">
              <div className="renewal-consultation__heading">
                <span className="renewal-consultation__icon">
                  <Icon name="shield" />
                </span>
                <div>
                  <span>{renewal.eyebrow}</span>
                  <h3>{renewal.subtitle}</h3>
                </div>
              </div>
              <ul className="renewal-consultation__benefits">
                {renewal.benefits.map((benefit) => (
                  <li key={benefit.label}>
                    <span className="renewal-consultation__benefit-icon">
                      <Icon name={benefit.icon} />
                    </span>
                    <strong>{benefit.label}</strong>
                    <Icon className="renewal-consultation__check" name="check" />
                  </li>
                ))}
              </ul>
              <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
                {renewal.ctaLabel}
              </Button>
            </div>
          )}
          {renewal.disclaimer ? (
            <p className="commercial-disclaimer">{renewal.disclaimer}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
