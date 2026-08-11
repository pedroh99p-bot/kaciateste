import type { FaqItemConfig } from "@/prospects/types";
import { Icon } from "./Icon";

type FaqItemProps = {
  item: FaqItemConfig;
};

export function FaqItem({ item }: FaqItemProps) {
  return (
    <details className="faq-item">
      <summary>
        <span>{item.question}</span>
        <Icon name="chevron-right" />
      </summary>
      <p>{item.answer}</p>
    </details>
  );
}
