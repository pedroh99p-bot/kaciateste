"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";

type QuickConsultProps = {
  prospect: ResolvedProspect;
};

export function QuickConsult({ prospect }: QuickConsultProps) {
  const [identifierValue, setIdentifierValue] = useState("");
  const [customerWhatsApp, setCustomerWhatsApp] = useState("");
  const [selectedService, setSelectedService] = useState(prospect.enabledServices[0]?.title ?? "");

  const href = useMemo(
    () =>
      createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
        origin: "consulta-rapida",
        selectedService,
        ...(prospect.quickConsult.identifierField === "name"
          ? { customerName: identifierValue }
          : { vehiclePlate: identifierValue }),
        customerWhatsApp
      }),
    [
      customerWhatsApp,
      identifierValue,
      prospect.contact.defaultMessage,
      prospect.contact.whatsapp,
      prospect.quickConsult.identifierField,
      selectedService
    ]
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="quick-consult" onSubmit={handleSubmit}>
      <div className="quick-consult__header">
        <strong>
          <Icon name="spark" />
          Consulta rápida
        </strong>
        <span>Atendimento pelo WhatsApp</span>
      </div>
      <label>
        <span>Serviço</span>
        <select value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
          {prospect.enabledServices.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Ainda não sei qual serviço preciso">Ainda não sei qual serviço preciso</option>
        </select>
      </label>
      <div className="quick-consult__grid">
        <label>
          <span>{prospect.quickConsult.identifierLabel}</span>
          <input
            autoComplete={prospect.quickConsult.identifierField === "name" ? "name" : "off"}
            inputMode="text"
            placeholder={prospect.quickConsult.identifierPlaceholder}
            value={identifierValue}
            onChange={(event) => setIdentifierValue(event.target.value)}
          />
        </label>
        <label>
          <span>Seu WhatsApp</span>
          <input
            autoComplete="tel"
            inputMode="tel"
            placeholder="(00) 00000-0000"
            value={customerWhatsApp}
            onChange={(event) => setCustomerWhatsApp(event.target.value)}
          />
        </label>
      </div>
      <button className="quick-consult__button" type="submit">
        <Icon name="whatsapp" />
        Consultar agora
      </button>
      <p>
        <Icon name="lock" />
        Dados enviados apenas na mensagem do WhatsApp.
      </p>
    </form>
  );
}
