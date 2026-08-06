import { kaciaDespachanteProspect } from "./configs/kacia-despachante";
import { resolveProspect } from "./resolve-prospect";

export const defaultProspectSlug = kaciaDespachanteProspect.slug;

export const prospectInputs = [kaciaDespachanteProspect] as const;

export const prospectRegistry = prospectInputs.map((prospect) => resolveProspect(prospect));

export function getProspectBySlug(slug: string) {
  return prospectRegistry.find((prospect) => prospect.slug === slug) ?? null;
}

export function getAllProspectSlugs() {
  return prospectRegistry.map((prospect) => prospect.slug);
}

export function getDefaultProspectSlug() {
  return defaultProspectSlug;
}
