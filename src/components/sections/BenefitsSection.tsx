import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type BenefitsSectionProps = {
  prospect: ResolvedProspect;
};

export function BenefitsSection({ prospect }: BenefitsSectionProps) {
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "diferenciais"
  });

  return (
    <section
      className="section benefits"
      data-section-tone={prospect.layout.contentTone === "dark" ? "deep" : "soft"}
      id="diferenciais"
    >
      <Reveal>
        <SectionHeading
          eyebrow={prospect.copy.benefitsEyebrow}
          headline={prospect.copy.benefitsHeadline}
          icon="star"
        />
      </Reveal>
      <div className="benefits__grid">
        {prospect.benefits.map((benefit, index) => (
          <Reveal key={benefit.title} delay={index * 45}>
            <article className="benefit-card">
              <Icon name={benefit.icon} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="section-context-cta" delay={120}>
        <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
          Quero atendimento com segurança
        </Button>
      </Reveal>
    </section>
  );
}
