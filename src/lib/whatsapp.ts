type WhatsAppContext = {
  origin?: string;
  selectedService?: string;
  customerName?: string;
  customerWhatsApp?: string;
  customerCity?: string;
  vehiclePlate?: string;
  urgency?: string;
  customerMessage?: string;
};

export function normalizeWhatsAppNumber(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function composeWhatsAppMessage(defaultMessage: string, context: WhatsAppContext = {}) {
  const lines = [defaultMessage.trim()];

  if (context.selectedService) {
    lines.push(`Serviço: ${context.selectedService}`);
  }

  if (context.origin) {
    lines.push(`Origem do clique: ${context.origin}`);
  }

  if (context.customerName) {
    lines.push(`Nome: ${context.customerName}`);
  }

  if (context.customerWhatsApp) {
    lines.push(`WhatsApp informado: ${context.customerWhatsApp}`);
  }

  if (context.customerCity) {
    lines.push(`Cidade: ${context.customerCity}`);
  }

  if (context.vehiclePlate) {
    lines.push(`Placa/identificação: ${context.vehiclePlate}`);
  }

  if (context.urgency) {
    lines.push(`Urgência: ${context.urgency}`);
  }

  if (context.customerMessage) {
    lines.push(`Observação: ${context.customerMessage}`);
  }

  lines.push("Gostaria de receber uma orientação.");

  return lines.filter(Boolean).join("\n");
}

export function createWhatsAppHref(
  phone: string,
  defaultMessage: string,
  context: WhatsAppContext = {}
) {
  const normalizedPhone = normalizeWhatsAppNumber(phone);
  const message = composeWhatsAppMessage(defaultMessage, context);

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
