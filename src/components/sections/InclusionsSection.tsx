import type { ResolvedProspect } from "@/prospects/types";
import { Reveal } from "@/components/animations/Reveal";
import { AccessibleTabs, type InclusionPanel } from "@/components/commercial/AccessibleTabs";
import { SectionHeading } from "@/components/ui/SectionHeading";

type InclusionsSectionProps = {
  prospect: ResolvedProspect;
};

export function InclusionsSection({ prospect }: InclusionsSectionProps) {
  if (!prospect.canShowInclusions) {
    return null;
  }

  const panels: InclusionPanel[] = prospect.enabledInclusionTabs.map((tab) => {
    const relatedPackage = tab.packageId
      ? prospect.enabledPackages.find((item) => item.id === tab.packageId)
      : null;
    const featureIds = relatedPackage?.featureIds ?? tab.featureIds;

    return {
      id: tab.id,
      label: tab.label,
      shortLabel: tab.shortLabel,
      description: tab.description,
      price: relatedPackage?.price ?? null,
      features: featureIds.map((featureId) => prospect.commercialFeatureMap[featureId])
    };
  });

  return (
    <section className="section inclusions commercial-section" data-section-tone="deep" id="inclusoes">
      <Reveal>
        <SectionHeading
          eyebrow={prospect.inclusions.eyebrow}
          headline={prospect.inclusions.headline}
          icon="badge-check"
          subtitle={prospect.inclusions.subtitle}
        />
      </Reveal>
      <Reveal delay={80}>
        <AccessibleTabs
          defaultTabId={prospect.inclusions.defaultTabId ?? panels[0]?.id ?? ""}
          panels={panels}
        />
      </Reveal>
    </section>
  );
}
