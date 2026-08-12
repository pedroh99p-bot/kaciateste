import type { ResolvedProspect } from "@/prospects/types";
import { Reveal } from "@/components/animations/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PackageComparisonSectionProps = {
  prospect: ResolvedProspect;
};

export function PackageComparisonSection({ prospect }: PackageComparisonSectionProps) {
  if (!prospect.canShowPackageComparison) {
    return null;
  }

  const packages = prospect.packageComparison.packageIds
    .map((id) => prospect.enabledPackages.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const features = prospect.packageComparison.featureIds.map(
    (id) => prospect.commercialFeatureMap[id]
  );

  return (
    <section className="section package-comparison commercial-section" data-section-tone="dark" id="comparar-pacotes">
      <Reveal>
        <SectionHeading
          eyebrow={prospect.packageComparison.eyebrow}
          headline={prospect.packageComparison.headline}
          icon="clipboard"
          subtitle={prospect.packageComparison.subtitle}
        />
      </Reveal>
      <Reveal delay={80}>
        <div className="comparison-table-shell">
          <table className="comparison-table">
            <caption>Comparação das principais inclusões dos pacotes</caption>
            <colgroup>
              <col className="comparison-table__feature-column" />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Serviço</th>
                {packages.map((item) => (
                  <th key={item.id} scope="col">
                    <span className="comparison-table__desktop-label">{item.name}</span>
                    <span className="comparison-table__mobile-label">{item.shortName}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.id}>
                  <th scope="row">
                    <Icon name={feature.icon} />
                    <span>{feature.shortTitle}</span>
                  </th>
                  {packages.map((item) => {
                    const included = item.featureIds.includes(feature.id);
                    return (
                      <td key={item.id}>
                        <span
                          aria-label={included ? "Incluído" : "Não incluído"}
                          className={`comparison-status comparison-status--${included ? "included" : "not-included"}`}
                          role="img"
                        >
                          <Icon name={included ? "check" : "minus"} />
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
