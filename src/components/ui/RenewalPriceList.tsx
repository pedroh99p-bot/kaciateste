import type { RenewalPriceConfig } from "@/prospects/types";

type RenewalPriceListProps = {
  items: RenewalPriceConfig[];
  additionalLabel: string | null;
};

export function RenewalPriceList({ items, additionalLabel }: RenewalPriceListProps) {
  return (
    <div className="renewal-price-list">
      <ul>
        {items.map((item) => (
          <li key={`${item.quantity}-${item.label}`}>
            <span>{item.label}</span>
            <strong>{item.price}</strong>
          </li>
        ))}
      </ul>
      {additionalLabel ? <p>{additionalLabel}</p> : null}
    </div>
  );
}
