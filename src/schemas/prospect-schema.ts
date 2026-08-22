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
  const duplicateIds = (ids: string[]) => ids.filter((id, index) => ids.indexOf(id) !== index);

  if (!prospect.enabledServices.length) {
    errors.push(`${prospect.slug}: ao menos um serviço precisa estar habilitado`);
  }

  for (const service of prospect.enabledServices) {
    if (!service.ctaLabel.trim() || !service.whatsappMessage.trim()) {
      errors.push(`${prospect.slug}: serviço ${service.id} precisa de CTA e mensagem de WhatsApp`);
    }
  }

  if (prospect.packages.enabled) {
    if (!prospect.enabledPackages.length) {
      errors.push(`${prospect.slug}: packages.enabled está true, mas não há pacotes habilitados`);
    }

    const duplicateFeatureIds = duplicateIds(prospect.commercialFeatures.map((item) => item.id));
    const duplicatePackageIds = duplicateIds(prospect.packages.items.map((item) => item.id));
    const featuredPackages = prospect.enabledPackages.filter((item) => item.featured);

    if (duplicateFeatureIds.length) {
      errors.push(`${prospect.slug}: IDs duplicados no catálogo comercial (${[...new Set(duplicateFeatureIds)].join(", ")})`);
    }

    if (duplicatePackageIds.length) {
      errors.push(`${prospect.slug}: IDs duplicados em packages (${[...new Set(duplicatePackageIds)].join(", ")})`);
    }

    if (featuredPackages.length > 1) {
      errors.push(`${prospect.slug}: apenas um pacote pode estar destacado`);
    }

    for (const feature of prospect.commercialFeatures) {
      if (!feature.id.trim() || !feature.title.trim() || !feature.shortTitle.trim()) {
        errors.push(`${prospect.slug}: funcionalidade comercial ${feature.id || "sem-id"} está incompleta`);
      }
    }

    for (const item of prospect.enabledPackages) {
      if (
        !item.name.trim() ||
        !item.shortName.trim() ||
        (item.price !== null && !item.price.trim()) ||
        !item.description.trim() ||
        !item.featureIds.length ||
        !item.cardFeatureIds.length ||
        !item.ctaLabel.trim() ||
        !item.whatsappMessage.trim()
      ) {
        errors.push(`${prospect.slug}: pacote ${item.id} está incompleto`);
      }

      if (item.cardFeatureIds.length > 4) {
        errors.push(`${prospect.slug}: pacote ${item.id} pode exibir no máximo 4 benefícios no card`);
      }

      for (const featureId of [...item.featureIds, ...item.cardFeatureIds]) {
        if (!prospect.commercialFeatureMap[featureId]) {
          errors.push(`${prospect.slug}: pacote ${item.id} referencia a funcionalidade inexistente ${featureId}`);
        }
      }

      if (item.cardFeatureIds.some((featureId) => !item.featureIds.includes(featureId))) {
        errors.push(`${prospect.slug}: benefícios resumidos de ${item.id} precisam existir no escopo completo do pacote`);
      }
    }
  }

  if (prospect.packageComparison.enabled) {
    if (!prospect.canShowPackageComparison) {
      errors.push(`${prospect.slug}: comparação de pacotes está incompleta ou possui referências inválidas`);
    }

    for (const packageId of prospect.packageComparison.packageIds) {
      if (!prospect.enabledPackages.some((item) => item.id === packageId)) {
        errors.push(`${prospect.slug}: comparação referencia o pacote inexistente ${packageId}`);
      }
    }

    for (const featureId of prospect.packageComparison.featureIds) {
      if (!prospect.commercialFeatureMap[featureId]) {
        errors.push(`${prospect.slug}: comparação referencia a funcionalidade inexistente ${featureId}`);
      }
    }
  }

  if (prospect.inclusions.enabled) {
    const duplicateTabIds = duplicateIds(prospect.inclusions.tabs.map((tab) => tab.id));

    if (duplicateTabIds.length) {
      errors.push(`${prospect.slug}: IDs duplicados nas tabs de inclusões (${[...new Set(duplicateTabIds)].join(", ")})`);
    }

    if (!prospect.canShowInclusions) {
      errors.push(`${prospect.slug}: seção de inclusões está incompleta`);
    }

    if (
      prospect.inclusions.defaultTabId &&
      !prospect.inclusions.tabs.some((tab) => tab.id === prospect.inclusions.defaultTabId)
    ) {
      errors.push(`${prospect.slug}: tab padrão de inclusões não existe`);
    }

    for (const tab of prospect.inclusions.tabs) {
      if (!tab.label.trim() || !tab.shortLabel.trim() || !tab.description.trim()) {
        errors.push(`${prospect.slug}: tab ${tab.id} está incompleta`);
      }

      if (tab.packageId && !prospect.enabledPackages.some((item) => item.id === tab.packageId)) {
        errors.push(`${prospect.slug}: tab ${tab.id} referencia o pacote inexistente ${tab.packageId}`);
      }

      for (const featureId of tab.featureIds) {
        if (!prospect.commercialFeatureMap[featureId]) {
          errors.push(`${prospect.slug}: tab ${tab.id} referencia a funcionalidade inexistente ${featureId}`);
        }
      }
    }
  }

  if (prospect.renewal.enabled) {
    if (!prospect.renewal.ctaLabel.trim() || !prospect.renewal.whatsappMessage.trim()) {
      errors.push(`${prospect.slug}: renovação precisa de CTA e mensagem de WhatsApp`);
    }

    const duplicateQuantities = duplicateIds(prospect.renewal.prices.map((item) => String(item.quantity)));
    if (duplicateQuantities.length) {
      errors.push(`${prospect.slug}: há quantidades duplicadas na renovação`);
    }

    for (const item of prospect.renewal.prices) {
      if (item.quantity < 1 || !item.label.trim() || !item.price.trim()) {
        errors.push(`${prospect.slug}: opção de renovação ${item.quantity} está incompleta`);
      }
    }

    if (
      prospect.renewal.initialQuantity !== null &&
      !prospect.renewal.prices.some((item) => item.quantity === prospect.renewal.initialQuantity)
    ) {
      errors.push(`${prospect.slug}: quantidade inicial da renovação não existe na lista de preços`);
    }
  }

  if (prospect.reports.enabled && !prospect.enabledReports.length) {
    errors.push(`${prospect.slug}: reports.enabled está true, mas não há etapas habilitadas`);
  }

  if (prospect.faq.enabled) {
    if (!prospect.enabledFaqItems.length) {
      errors.push(`${prospect.slug}: faq.enabled está true, mas não há perguntas habilitadas`);
    }

    for (const item of prospect.enabledFaqItems) {
      if (!item.question.trim() || !item.answer.trim()) {
        errors.push(`${prospect.slug}: FAQ ${item.id} precisa de pergunta e resposta`);
      }
    }
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

      if (testimonial.sourceUrl && !isHttpUrl(testimonial.sourceUrl)) {
        errors.push(`${prospect.slug}: depoimento ${index + 1} possui URL de origem inválida`);
      }
    }
  }

  if (prospect.digitalProduct.enabled) {
    if (
      !prospect.digitalProduct.eyebrow.trim() ||
      !prospect.digitalProduct.subtitle.trim() ||
      !prospect.digitalProduct.description.trim() ||
      !prospect.digitalProduct.benefits.length ||
      !prospect.digitalProduct.ctaLabel.trim() ||
      !prospect.digitalProduct.checkoutUrl ||
      !prospect.digitalProduct.cover?.src
    ) {
      errors.push(`${prospect.slug}: o produto digital está habilitado, mas possui campos obrigatórios vazios`);
    }

    if (
      prospect.digitalProduct.checkoutUrl &&
      !isHttpUrl(prospect.digitalProduct.checkoutUrl)
    ) {
      errors.push(`${prospect.slug}: digitalProduct.checkoutUrl possui URL inválida`);
    }

    validateAssetUrl(
      `${prospect.slug}: digitalProduct.cover`,
      prospect.digitalProduct.cover?.src ?? null,
      errors
    );
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

  if (prospect.quickConsult.enabled) {
    if (
      !prospect.quickConsult.eyebrow.trim() ||
      !prospect.quickConsult.description.trim() ||
      !prospect.quickConsult.identifierLabel.trim() ||
      !prospect.quickConsult.identifierPlaceholder.trim() ||
      !prospect.quickConsult.stateLabel.trim() ||
      !prospect.quickConsult.statePlaceholder.trim() ||
      !prospect.quickConsult.situationLabel.trim() ||
      !prospect.quickConsult.situationPlaceholder.trim() ||
      !prospect.quickConsult.ctaLabel.trim()
    ) {
      errors.push(`${prospect.slug}: a consulta rápida está habilitada, mas possui textos obrigatórios vazios`);
    }
  }

  if (prospect.layout.pageProgress.enabled) {
    const progressSections = prospect.layout.pageProgress.sections;
    const duplicateProgressIds = duplicateIds(progressSections.map((section) => section.id));

    if (!progressSections.length) {
      errors.push(`${prospect.slug}: o progresso da página está ativo, mas não possui seções`);
    }

    if (duplicateProgressIds.length) {
      errors.push(
        `${prospect.slug}: IDs duplicados no progresso da página (${[...new Set(duplicateProgressIds)].join(", ")})`
      );
    }

    for (const section of progressSections) {
      if (!section.id.trim() || !section.label.trim()) {
        errors.push(`${prospect.slug}: as etapas do progresso precisam de ID e rótulo`);
      }
    }
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
  validateAssetUrl(
    `${prospect.slug}: proof.sourceLogo`,
    prospect.proof.sourceLogo?.src ?? null,
    errors
  );

  if (
    prospect.proof.starCount !== null &&
    (prospect.proof.starCount < 1 || prospect.proof.starCount > 5)
  ) {
    errors.push(`${prospect.slug}: proof.starCount precisa estar entre 1 e 5`);
  }

  return errors;
}
