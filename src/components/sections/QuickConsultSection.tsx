import type { ResolvedProspect } from "@/prospects/types";
import { Reveal } from "@/components/animations/Reveal";
import { QuickConsult } from "@/components/quiz/QuickConsult";
import { SectionHeading } from "@/components/ui/SectionHeading";

type QuickConsultSectionProps = {
  prospect: ResolvedProspect;
};

export function QuickConsultSection({ prospect }: QuickConsultSectionProps) {
  if (!prospect.quickConsult.enabled || prospect.enabledServices.length === 0) {
    return null;
  }

  return (
    <section className="section quick-consult-section" data-section-tone="deep" id="consulta">
      <Reveal>
        <SectionHeading
          eyebrow={prospect.quickConsult.eyebrow}
          headline={prospect.quickConsult.headline}
          icon="message"
          subtitle={prospect.quickConsult.description}
        />
      </Reveal>
      <Reveal className="quick-consult-section__form" delay={80}>
        <QuickConsult prospect={prospect} />
      </Reveal>
    </section>
  );
}
