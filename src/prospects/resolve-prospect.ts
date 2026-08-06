import { composeCopy } from "@/copy/compose-copy";
import { getCopyVariables, interpolate } from "@/copy/variables";
import { defaultProspectConfig } from "./defaults";
import type { DeepPartial, ProspectConfig, ProspectConfigInput, ResolvedProspect } from "./types";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function mergeDeep<T>(base: T, override?: DeepPartial<T>): T {
  if (override === undefined || override === null) {
    return structuredClone(base);
  }

  if (Array.isArray(base)) {
    return structuredClone(override) as T;
  }

  if (isPlainObject(base) && isPlainObject(override)) {
    const result: Record<string, unknown> = { ...base };

    for (const [key, value] of Object.entries(override)) {
      const baseValue = (base as Record<string, unknown>)[key];
      result[key] = isPlainObject(baseValue) && isPlainObject(value)
        ? mergeDeep(baseValue, value as DeepPartial<typeof baseValue>)
        : structuredClone(value);
    }

    return result as T;
  }

  return structuredClone(override) as T;
}

function normalizeWhatsApp(value: string): string {
  return value.replace(/\D/g, "");
}

export function resolveProspect(input: ProspectConfigInput): ResolvedProspect {
  const merged = mergeDeep(defaultProspectConfig, input) as ProspectConfig;
  const normalized: ProspectConfig = {
    ...merged,
    contact: {
      ...merged.contact,
      whatsapp: normalizeWhatsApp(merged.contact.whatsapp)
    }
  };
  const variables = getCopyVariables(normalized);
  const withVariables: ProspectConfig = {
    ...normalized,
    contact: {
      ...normalized.contact,
      defaultMessage: interpolate(normalized.contact.defaultMessage, variables)
    },
    chatbot: {
      ...normalized.chatbot,
      title: interpolate(normalized.chatbot.title, variables),
      greeting: interpolate(normalized.chatbot.greeting, variables),
      disclaimer: interpolate(normalized.chatbot.disclaimer, variables),
      quickReplies: normalized.chatbot.quickReplies.map((reply) => ({
        ...reply,
        label: interpolate(reply.label, variables),
        response: interpolate(reply.response, variables),
        whatsappMessage: interpolate(reply.whatsappMessage, variables)
      }))
    }
  };

  const withCopy: ProspectConfig = {
    ...withVariables,
    copy: composeCopy(withVariables)
  };

  const enabledServices = withCopy.services.filter((service) => service.enabled);
  const canShowProof =
    withCopy.proof.enabled &&
    Boolean(
      withCopy.proof.rating ||
        withCopy.proof.reviewCount ||
        withCopy.proof.clientsServed ||
        withCopy.proof.yearsExperience
    );

  return {
    ...withCopy,
    enabledServices,
    canShowProof,
    canIndex: withCopy.status === "client" && withCopy.seo.allowIndexing,
    visibleRollerItems: withCopy.rollers.authority.items.filter(
      (item) => !item.requiresProof || canShowProof
    )
  };
}
