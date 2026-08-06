import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { HighlightText } from "@/components/ui/HighlightText";
import { Icon } from "@/components/ui/Icon";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type WhatsAppGroupSectionProps = {
  prospect: ResolvedProspect;
};

export function WhatsAppGroupSection({ prospect }: WhatsAppGroupSectionProps) {
  const group = prospect.whatsappGroup;

  if (!group.enabled) {
    return null;
  }

  const whatsappHref = createWhatsAppHref(
    prospect.contact.whatsapp,
    prospect.contact.defaultMessage,
    {
      origin: "grupo-whatsapp",
      selectedService: group.name,
      customerMessage: group.whatsappMessage
    }
  );

  return (
    <section className="section whatsapp-group" data-section-tone="dark" id="grupo-whatsapp">
      <Reveal className="whatsapp-group__card">
        <div className="whatsapp-group__visual">
          <div className="whatsapp-group__logo-halo" />
          <ImageWithFallback
            className="whatsapp-group__logo"
            fallback={prospect.assets.logo}
            image={group.logo}
            sizes="(max-width: 760px) 180px, 260px"
          />
        </div>
        <div className="whatsapp-group__content">
          <p className="eyebrow">
            <Icon className="eyebrow__icon" name="whatsapp" />
            <span>{group.eyebrow}</span>
          </p>
          <h2>
            <HighlightText copy={group.headline} />
          </h2>
          <p className="whatsapp-group__name">{group.name}</p>
          <p className="whatsapp-group__description">{group.description}</p>
          <ul className="whatsapp-group__benefits">
            {group.benefits.map((benefit) => (
              <li key={benefit.label}>
                <Icon name={benefit.icon} />
                <span>{benefit.label}</span>
              </li>
            ))}
          </ul>
          <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
            {group.ctaLabel}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
