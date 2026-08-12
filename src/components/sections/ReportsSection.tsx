import type { ResolvedProspect } from "@/prospects/types";
import { Reveal } from "@/components/animations/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ReportsSectionProps = {
  prospect: ResolvedProspect;
};

export function ReportsSection({ prospect }: ReportsSectionProps) {
  if (!prospect.reports.enabled || prospect.enabledReports.length === 0) {
    return null;
  }

  return (
    <section className="section reports commercial-section" data-section-tone="deep" id="laudos">
      <Reveal>
        <SectionHeading
          eyebrow={prospect.reports.eyebrow}
          headline={prospect.reports.headline}
          subtitle={prospect.reports.subtitle}
          icon="clipboard"
        />
      </Reveal>
      <div className="reports__grid">
        {prospect.enabledReports.map((item, index) => (
          <Reveal key={item.id} delay={index * 70}>
            <article className="report-card">
              <span className="commercial-icon">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
