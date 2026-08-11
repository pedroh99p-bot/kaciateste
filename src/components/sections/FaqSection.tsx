import type { ResolvedProspect } from "@/prospects/types";
import { Reveal } from "@/components/animations/Reveal";
import { FaqItem } from "@/components/ui/FaqItem";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FaqSectionProps = {
  prospect: ResolvedProspect;
};

export function FaqSection({ prospect }: FaqSectionProps) {
  if (!prospect.faq.enabled || prospect.enabledFaqItems.length === 0) {
    return null;
  }

  return (
    <section className="section faq" data-section-tone="deep" id="faq">
      <Reveal>
        <SectionHeading
          eyebrow={prospect.faq.eyebrow}
          headline={prospect.faq.headline}
          subtitle={prospect.faq.subtitle}
          icon="message"
        />
      </Reveal>
      <div className="faq__list">
        {prospect.enabledFaqItems.map((item, index) => (
          <Reveal key={item.id} delay={index * 35}>
            <FaqItem item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
