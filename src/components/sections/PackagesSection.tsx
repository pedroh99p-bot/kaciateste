import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { PackageRail } from "@/components/commercial/PackageRail";
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PackagesSectionProps = {
  prospect: ResolvedProspect;
};

export function PackagesSection({ prospect }: PackagesSectionProps) {
  if (!prospect.packages.enabled || prospect.enabledPackages.length === 0) {
    return null;
  }

  return (
    <section className="section packages" data-section-tone="deep" id="pacotes">
      <Reveal>
        <SectionHeading
          eyebrow={prospect.packages.eyebrow}
          headline={prospect.packages.headline}
          subtitle={prospect.packages.subtitle}
          icon="star"
        />
      </Reveal>
      <PackageRail itemCount={prospect.enabledPackages.length}>
        {prospect.enabledPackages.map((item, index) => {
          const href = createWhatsAppHref(
            prospect.contact.whatsapp,
            prospect.contact.defaultMessage,
            {
              origin: `pacote-${item.id}`,
              selectedService: item.name,
              customerMessage: item.whatsappMessage
            }
          );

          return (
            <Reveal key={item.id} delay={index * 70}>
              <PackageCard
                features={item.cardFeatureIds.map((featureId) => prospect.commercialFeatureMap[featureId])}
                href={href}
                item={item}
              />
            </Reveal>
          );
        })}
      </PackageRail>
      {prospect.packages.disclaimer ? (
        <Reveal delay={120}>
          <p className="commercial-disclaimer">{prospect.packages.disclaimer}</p>
        </Reveal>
      ) : null}
    </section>
  );
}
