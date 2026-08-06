import type { HighlightCopy, IconName } from "@/prospects/types";
import { HighlightText } from "./HighlightText";
import { Icon } from "./Icon";

type SectionHeadingProps = {
  eyebrow: string;
  headline: HighlightCopy;
  subtitle?: string;
  icon?: IconName;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  headline,
  subtitle,
  icon = "spark",
  align = "center"
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">
        <Icon className="eyebrow__icon" name={icon} />
        <span>{eyebrow}</span>
      </p>
      <h2>
        <HighlightText copy={headline} />
      </h2>
      {subtitle ? <p className="section-heading__subtitle">{subtitle}</p> : null}
    </div>
  );
}
