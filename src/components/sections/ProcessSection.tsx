import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProcessSectionProps = {
  prospect: ResolvedProspect;
};

export function ProcessSection({ prospect }: ProcessSectionProps) {
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "como-funciona"
  });

  return (
    <section
      className="section process"
      data-section-tone={prospect.layout.contentTone === "dark" ? "deep" : "soft"}
      id="como-funciona"
    >
      <Reveal>
        <SectionHeading
          eyebrow={prospect.copy.processEyebrow}
          headline={prospect.copy.processHeadline}
          icon="route"
        />
      </Reveal>
      <div className="process__steps">
        {prospect.process.map((step, index) => (
          <Reveal key={step.title} delay={index * 65}>
            <article className="process-step">
              <span className="process-step__number">{index + 1}</span>
              <div className="process-step__icon">
                <Icon name={step.icon} />
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="section-context-cta" delay={140}>
        <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
          Começar pelo WhatsApp
        </Button>
      </Reveal>
    </section>
  );
}
