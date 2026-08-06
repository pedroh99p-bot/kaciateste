import type { ServiceConfig } from "@/prospects/types";
import { Button } from "./Button";
import { Icon } from "./Icon";

type ServiceCardProps = {
  service: ServiceConfig;
  href: string;
};

export function ServiceCard({ service, href }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card__icon">
        <Icon name={service.icon} />
      </div>
      <div className="service-card__content">
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
      </div>
      <Button href={href} variant="ghost">
        Preciso disso
      </Button>
    </article>
  );
}
