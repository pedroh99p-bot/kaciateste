"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";

type QuickConsultProps = {
  prospect: ResolvedProspect;
};

const brazilianStates = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

export function QuickConsult({ prospect }: QuickConsultProps) {
  const [identifierValue, setIdentifierValue] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [currentSituation, setCurrentSituation] = useState("");
  const [selectedService, setSelectedService] = useState(prospect.enabledServices[0]?.title ?? "");

  const href = useMemo(
    () =>
      createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
        origin: "consulta-rapida",
        selectedService,
        ...(prospect.quickConsult.identifierField === "name"
          ? { customerName: identifierValue }
          : { vehiclePlate: identifierValue }),
        customerState,
        customerMessage: currentSituation,
        messageFormat: "lead-intake"
      }),
    [
      currentSituation,
      customerState,
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
        <div>
          <strong>
            <Icon name="spark" />
            Resumo do atendimento
          </strong>
          <span>Chega organizado diretamente para o atendimento</span>
        </div>
        <Icon className="quick-consult__header-icon" name="whatsapp" />
      </div>
      <div className="quick-consult__grid">
        <label>
          <span>{prospect.quickConsult.identifierLabel}</span>
          <input
            autoComplete={prospect.quickConsult.identifierField === "name" ? "name" : "off"}
            inputMode="text"
            placeholder={prospect.quickConsult.identifierPlaceholder}
            required
            value={identifierValue}
            onChange={(event) => setIdentifierValue(event.target.value)}
          />
        </label>
        <label>
          <span>{prospect.quickConsult.stateLabel}</span>
          <select
            required
            value={customerState}
            onChange={(event) => setCustomerState(event.target.value)}
          >
            <option value="">{prospect.quickConsult.statePlaceholder}</option>
            {brazilianStates.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>Serviço ou assunto</span>
        <select required value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
          {prospect.enabledServices.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Ainda não sei qual serviço preciso">Ainda não sei qual serviço preciso</option>
        </select>
      </label>
      <label>
        <span>{prospect.quickConsult.situationLabel}</span>
        <textarea
          maxLength={500}
          placeholder={prospect.quickConsult.situationPlaceholder}
          required
          rows={4}
          value={currentSituation}
          onChange={(event) => setCurrentSituation(event.target.value)}
        />
      </label>
      <button className="quick-consult__button" type="submit">
        <Icon name="whatsapp" />
        {prospect.quickConsult.ctaLabel}
      </button>
      <p>
        <Icon name="lock" />
        Dados enviados apenas na mensagem do WhatsApp.
      </p>
    </form>
  );
}
