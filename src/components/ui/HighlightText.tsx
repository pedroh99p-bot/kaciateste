import type { HighlightCopy } from "@/prospects/types";

type HighlightTextProps = {
  copy: HighlightCopy;
  className?: string;
};

export function HighlightText({ copy, className = "" }: HighlightTextProps) {
  const variant = copy.variant ?? "none";

  return (
    <span className={className}>
      {copy.before}
      {copy.highlight ? (
        <>
          {" "}
          <span className={`highlight highlight--${variant}`}>{copy.highlight}</span>
        </>
      ) : null}
      {copy.after ? <> {copy.after}</> : null}
    </span>
  );
}
