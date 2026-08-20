import type { CommercialFeatureConfig, PackageConfig } from "@/prospects/types";
import { Button } from "./Button";
import { Icon } from "./Icon";

type PackageCardProps = {
  item: PackageConfig;
  href: string;
  features: CommercialFeatureConfig[];
};

export function PackageCard({ item, href, features }: PackageCardProps) {
  return (
    <article className={`package-card${item.featured ? " package-card--featured" : ""}`} data-package-card>
      {item.badge ? <span className="package-card__badge">{item.badge}</span> : null}
      <div className="package-card__header">
        {item.eyebrow ? <span className="package-card__eyebrow">{item.eyebrow}</span> : null}
        <h3>{item.name}</h3>
        {item.price ? <strong className="package-card__price">{item.price}</strong> : null}
        {item.installments ? <p className="package-card__installments">ou {item.installments}</p> : null}
        <p className="package-card__description">{item.description}</p>
      </div>
      <ul className="package-card__items">
        {features.map((feature) => (
          <li key={feature.id}>
            <Icon name={feature.icon} />
            <span>{feature.shortTitle}</span>
          </li>
        ))}
      </ul>
      <Button href={href} icon="whatsapp" variant={item.featured ? "whatsapp" : "secondary"}>
        {item.ctaLabel}
      </Button>
    </article>
  );
}
