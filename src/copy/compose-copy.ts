import type { CopyConfig, HighlightCopy, ProspectConfig } from "@/prospects/types";
import { getCopyVariables, interpolate } from "./variables";

function resolveHighlight(copy: HighlightCopy, variables: Record<string, string>): HighlightCopy {
  return {
    ...copy,
    before: interpolate(copy.before, variables),
    highlight: copy.highlight ? interpolate(copy.highlight, variables) : undefined,
    after: copy.after ? interpolate(copy.after, variables) : undefined
  };
}

export function composeCopy(config: ProspectConfig): CopyConfig {
  const variables = getCopyVariables(config);

  return {
    ...config.copy,
    heroEyebrow: interpolate(config.copy.heroEyebrow, variables),
    heroHeadline: resolveHighlight(config.copy.heroHeadline, variables),
    heroSubtitle: interpolate(config.copy.heroSubtitle, variables),
    servicesHeadline: resolveHighlight(config.copy.servicesHeadline, variables),
    servicesSubtitle: interpolate(config.copy.servicesSubtitle, variables),
    specialistHeadline: resolveHighlight(config.copy.specialistHeadline, variables),
    benefitsHeadline: resolveHighlight(config.copy.benefitsHeadline, variables),
    processHeadline: resolveHighlight(config.copy.processHeadline, variables),
    testimonialsHeadline: resolveHighlight(config.copy.testimonialsHeadline, variables),
    locationHeadline: resolveHighlight(config.copy.locationHeadline, variables),
    finalHeadline: resolveHighlight(config.copy.finalHeadline, variables),
    finalSubtitle: interpolate(config.copy.finalSubtitle, variables),
    footerDescription: interpolate(config.copy.footerDescription, variables),
    finalBenefits: config.copy.finalBenefits.map((benefit) => interpolate(benefit, variables))
  };
}
