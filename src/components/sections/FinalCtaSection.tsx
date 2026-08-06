import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { HighlightText } from "@/components/ui/HighlightText";
import { Icon } from "@/components/ui/Icon";

type FinalCtaSectionProps = {
  prospect: ResolvedProspect;
};

export function FinalCtaSection({ prospect }: FinalCtaSectionProps) {
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "oferta-final"
  });

  return (
    <section className="section final-cta" data-section-tone="dark" id="contato">
      <Reveal>
        <div className="final-cta__card">
          <div>
            <p className="eyebrow">
              <Icon className="eyebrow__icon" name="spark" />
              <span>{prospect.copy.finalEyebrow}</span>
            </p>
            <h2>
              <HighlightText copy={prospect.copy.finalHeadline} />
            </h2>
            <p>{prospect.copy.finalSubtitle}</p>
            <ul>
              {prospect.copy.finalBenefits.map((benefit) => (
                <li key={benefit}>
                  <Icon name="check" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="final-cta__actions">
            <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
              Falar no WhatsApp
            </Button>
            <Button href="#inicio" icon="calendar" variant="secondary">
              Fazer consulta rápida
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
