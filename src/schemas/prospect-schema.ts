import type { ProspectConfigInput, ResolvedProspect } from "@/prospects/types";
import { resolveProspect } from "@/prospects/resolve-prospect";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function validateAssetUrl(label: string, src: string | null, errors: string[]) {
  if (!src) {
    return;
  }

  if (src.startsWith("/")) {
    return;
  }

  if (!isHttpUrl(src)) {
    errors.push(`${label}: URL inválida (${src})`);
  }
}

export function validateProspectInput(input: ProspectConfigInput): string[] {
  const errors: string[] = [];

  if (!slugPattern.test(input.slug)) {
    errors.push(`slug inválido: ${input.slug}`);
  }

  if (!input.business?.name?.trim()) {
    errors.push(`${input.slug}: business.name é obrigatório`);
  }

  const resolved = resolveProspect(input);
  errors.push(...validateResolvedProspect(resolved));

  return errors;
}

export function validateResolvedProspect(prospect: ResolvedProspect): string[] {
  const errors: string[] = [];

  if (!prospect.enabledServices.length) {
    errors.push(`${prospect.slug}: ao menos um serviço precisa estar habilitado`);
  }

  if (!/^55\d{10,11}$/.test(prospect.contact.whatsapp)) {
    errors.push(
      `${prospect.slug}: contact.whatsapp deve estar normalizado com 55 + DDD + número`
    );
  }

  if (prospect.seo.allowIndexing && prospect.status !== "client") {
    errors.push(`${prospect.slug}: seo.allowIndexing só pode ser true com status "client"`);
  }

  if (prospect.proof.enabled) {
    const hasAnyProof =
      prospect.proof.rating ||
      prospect.proof.reviewCount ||
      prospect.proof.clientsServed ||
      prospect.proof.yearsExperience;

    if (!hasAnyProof) {
      errors.push(`${prospect.slug}: proof.enabled está true, mas não há prova preenchida`);
    }
  }

  if (prospect.testimonials.enabled) {
    for (const [index, testimonial] of prospect.testimonials.items.entries()) {
      if (!testimonial.isPlaceholder && !testimonial.source) {
        errors.push(
          `${prospect.slug}: depoimento ${index + 1} precisa de origem quando não for placeholder`
        );
      }
    }
  }

  if (prospect.whatsappGroup.enabled) {
    if (!prospect.whatsappGroup.name.trim()) {
      errors.push(`${prospect.slug}: whatsappGroup.name é obrigatório quando a seção está ativa`);
    }

    if (!prospect.whatsappGroup.ctaLabel.trim() || !prospect.whatsappGroup.whatsappMessage.trim()) {
      errors.push(`${prospect.slug}: CTA e mensagem do grupo de WhatsApp são obrigatórios`);
    }

    validateAssetUrl(
      `${prospect.slug}: whatsappGroup.logo`,
      prospect.whatsappGroup.logo?.src ?? null,
      errors
    );
  }

  if (
    !prospect.quickConsult.identifierLabel.trim() ||
    !prospect.quickConsult.identifierPlaceholder.trim()
  ) {
    errors.push(`${prospect.slug}: os textos do campo de identificação da consulta são obrigatórios`);
  }

  validateAssetUrl(`${prospect.slug}: assets.logo`, prospect.assets.logo.src, errors);
  validateAssetUrl(`${prospect.slug}: assets.symbol`, prospect.assets.symbol.src, errors);
  validateAssetUrl(
    `${prospect.slug}: assets.heroSpecialist`,
    prospect.assets.heroSpecialist?.src ?? null,
    errors
  );
  validateAssetUrl(
    `${prospect.slug}: assets.specialistPortrait`,
    prospect.assets.specialistPortrait?.src ?? null,
    errors
  );
  validateAssetUrl(`${prospect.slug}: assets.socialPreview`, prospect.assets.socialPreview, errors);
  validateAssetUrl(
    `${prospect.slug}: assets.backgroundTexture`,
    prospect.assets.backgroundTexture,
    errors
  );

  return errors;
}
