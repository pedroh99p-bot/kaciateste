import type { PackageConfig } from "@/prospects/types";
import { Button } from "./Button";
import { Icon } from "./Icon";

type PackageCardProps = {
  item: PackageConfig;
  href: string;
};

export function PackageCard({ item, href }: PackageCardProps) {
  return (
    <article className={`package-card${item.featured ? " package-card--featured" : ""}`}>
      {item.badge ? <span className="package-card__badge">{item.badge}</span> : null}
      <div className="package-card__header">
        {item.eyebrow ? <span className="package-card__eyebrow">{item.eyebrow}</span> : null}
        <h3>{item.name}</h3>
        <strong className="package-card__price">{item.price}</strong>
        {item.installments ? <p className="package-card__installments">ou {item.installments}</p> : null}
        <p className="package-card__description">{item.description}</p>
      </div>
      <ul className="package-card__items">
        {item.items.map((benefit) => (
          <li key={benefit}>
            <Icon name="check" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <Button href={href} icon="whatsapp" variant={item.featured ? "whatsapp" : "secondary"}>
        {item.ctaLabel}
      </Button>
    </article>
  );
}
