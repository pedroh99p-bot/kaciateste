import type { ProspectConfig } from "@/prospects/types";

export function getCopyVariables(config: ProspectConfig): Record<string, string> {
  return {
    businessName: config.business.name,
    businessCategory: config.business.category,
    specialistName: config.specialist.name,
    specialistRole: config.specialist.role,
    city: config.location.city,
    state: config.location.state,
    region: config.location.region,
    mainService: config.services.find((service) => service.enabled)?.title ?? "documentação veicular",
    serviceList: config.services
      .filter((service) => service.enabled)
      .map((service) => service.title)
      .join(", ")
  };
}

export function interpolate(template: string, variables: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => variables[key] ?? "");
}
