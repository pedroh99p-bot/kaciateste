import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServicesCarousel } from "@/components/services/ServicesCarousel";

type ServicesSectionProps = {
  prospect: ResolvedProspect;
};

export function ServicesSection({ prospect }: ServicesSectionProps) {
  const guidanceHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "servicos-duvida",
    selectedService: "Ainda não sei qual serviço preciso"
  });

  const serviceCards = prospect.enabledServices.map((service, index) => {
    const href = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
      origin: `servico-${service.id}`,
      selectedService: service.title,
      customerMessage: service.whatsappMessage
    });

    return (
      <Reveal key={service.id} delay={index * 50}>
        <ServiceCard href={href} service={service} />
      </Reveal>
    );
  });

  return (
    <section className="section services" data-section-tone={prospect.layout.servicesTone} id="servicos">
      <Reveal>
        <SectionHeading
          eyebrow="Serviços"
          headline={prospect.copy.servicesHeadline}
          subtitle={prospect.copy.servicesSubtitle}
          icon="clipboard"
        />
      </Reveal>
      {prospect.layout.servicesVariant === "carousel" ? (
        <ServicesCarousel>{serviceCards}</ServicesCarousel>
      ) : (
        <div className="services__grid">{serviceCards}</div>
      )}
      <Reveal className="services__guidance">
        <div className="guidance-card">
          <div className="guidance-card__mark">?</div>
          <div>
            <h3>Não sabe qual serviço precisa?</h3>
            <p>Explique sua situação e receba uma orientação inicial para entender o melhor próximo passo.</p>
            <Button href={guidanceHref} icon="whatsapp" variant="whatsapp">
              Receber orientação no WhatsApp
            </Button>
          </div>
          <ImageWithFallback
            className="guidance-card__person"
            fallback={prospect.assets.symbol}
            image={prospect.assets.specialistPortrait}
          />
        </div>
      </Reveal>
    </section>
  );
}
