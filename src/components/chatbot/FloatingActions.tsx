import type { CSSProperties } from "react";
import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";

type FloatingActionsProps = {
  prospect: ResolvedProspect;
};

type FloatingActionsStyle = CSSProperties & {
  "--chatbot-delay": string;
};

export function FloatingActions({ prospect }: FloatingActionsProps) {
  if (!prospect.chatbot.enabled) {
    return null;
  }

  const baseWhatsAppHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "acao-flutuante"
  });
  const quickReplies = prospect.chatbot.quickReplies;

  return (
    <div
      className="floating-actions"
      style={{ "--chatbot-delay": `${Math.max(0, prospect.chatbot.showAfterSeconds)}s` } as FloatingActionsStyle}
    >
      <a
        aria-label="Falar no WhatsApp"
        className="floating-actions__whatsapp"
        href={baseWhatsAppHref}
      >
        <Icon name="whatsapp" />
      </a>

      <details className="mini-chatbot-shell">
        <summary aria-controls="mini-chatbot" className="chatbot-launcher">
          <Icon name="message" />
          <span>Tirar dúvida</span>
        </summary>

        <div className="mini-chatbot" id="mini-chatbot" role="region" aria-label={prospect.chatbot.title}>
          <div className="mini-chatbot__header">
            <div>
              <span>Pré-atendimento</span>
              <h2>{prospect.chatbot.title}</h2>
            </div>
          </div>

          <div className="mini-chatbot__message">
            <Icon name="message" />
            <p>{prospect.chatbot.greeting}</p>
          </div>

          <div className="mini-chatbot__options">
            {quickReplies.map((reply) => {
              const selectedService = reply.relatedServiceId
                ? prospect.services.find((service) => service.id === reply.relatedServiceId)?.title
                : undefined;
              const replyHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
                origin: "mini-chatbot",
                selectedService,
                customerMessage: reply.whatsappMessage
              });

              return (
                <details key={reply.id} className="mini-chatbot__reply">
                  <summary>
                    <Icon name={reply.icon} />
                    <span>{reply.label}</span>
                  </summary>
                  <p>{reply.response}</p>
                  <a href={replyHref}>Enviar contexto no WhatsApp</a>
                </details>
              );
            })}
          </div>

          <a className="mini-chatbot__cta" href={baseWhatsAppHref}>
            <Icon name="whatsapp" />
            <span>Continuar pelo WhatsApp</span>
          </a>

          <p className="mini-chatbot__disclaimer">{prospect.chatbot.disclaimer}</p>
        </div>
      </details>
    </div>
  );
}
