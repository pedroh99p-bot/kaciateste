"use client";

import { useId, useState } from "react";
import type { IconName, RenewalPriceConfig } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type RenewalConfiguratorProps = {
  additionalLabel: string | null;
  benefits: Array<{ label: string; icon: IconName }>;
  ctaLabel: string;
  defaultMessage: string;
  initialQuantity: number | null;
  options: RenewalPriceConfig[];
  phone: string;
  whatsappMessage: string;
};

export function RenewalConfigurator({
  additionalLabel,
  benefits,
  ctaLabel,
  defaultMessage,
  initialQuantity,
  options,
  phone,
  whatsappMessage
}: RenewalConfiguratorProps) {
  const groupId = useId();
  const fallbackQuantity = options[0]?.quantity ?? 1;
  const [quantity, setQuantity] = useState(initialQuantity ?? fallbackQuantity);
  const selected = options.find((item) => item.quantity === quantity) ?? options[0];

  if (!selected) {
    return null;
  }

  const href = createWhatsAppHref(phone, defaultMessage, {
    origin: "configurador-renovacao-craf",
    selectedService: `Renovação de ${selected.label}`,
    customerMessage: `${whatsappMessage} Quantidade selecionada: ${selected.label}.`
  });

  return (
    <div className="renewal-configurator">
      <fieldset className="renewal-configurator__selector">
        <legend>Quantos CRAFs você precisa renovar?</legend>
        <div className="renewal-configurator__options">
          {options.map((item) => {
            const inputId = `${groupId}-${item.quantity}`;
            return (
              <label key={item.quantity} htmlFor={inputId}>
                <input
                  checked={quantity === item.quantity}
                  id={inputId}
                  name={`${groupId}-quantity`}
                  onChange={() => setQuantity(item.quantity)}
                  type="radio"
                  value={item.quantity}
                />
                <span>{item.quantity}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
      <div aria-atomic="true" aria-live="polite" className="renewal-configurator__result">
        <div className="renewal-configurator__price">
          <span>Seleção atual</span>
          <h3>{selected.label}</h3>
          <strong>{selected.price}</strong>
          {additionalLabel ? <p>{additionalLabel}</p> : null}
        </div>
        <ul className="renewal-configurator__benefits">
          {benefits.map((benefit) => (
            <li key={benefit.label}>
              <Icon name={benefit.icon} />
              <span>{benefit.label}</span>
            </li>
          ))}
        </ul>
        <Button href={href} icon="whatsapp" variant="whatsapp">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
