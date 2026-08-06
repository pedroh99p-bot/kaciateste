import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Icon } from "@/components/ui/Icon";

type FooterProps = {
  prospect: ResolvedProspect;
};

export function Footer({ prospect }: FooterProps) {
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "footer"
  });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <ImageWithFallback
            className="footer__logo"
            fallback={prospect.assets.logo}
            image={prospect.assets.logoLight ?? prospect.assets.logo}
          />
          <p>{prospect.copy.footerDescription}</p>
          <div className="footer__social">
            {prospect.contact.instagramUrl ? (
              <a href={prospect.contact.instagramUrl} aria-label="Abrir Instagram">
                <Icon name="instagram" />
              </a>
            ) : null}
            <a href={whatsappHref} aria-label="Abrir WhatsApp">
              <Icon name="whatsapp" />
            </a>
            {prospect.location.routeUrl ? (
              <a href={prospect.location.routeUrl} aria-label="Traçar rota">
                <Icon name="map" />
              </a>
            ) : null}
          </div>
        </div>
        <div>
          <h2>Links rápidos</h2>
          <ul>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#especialista">Especialista</a>
            </li>
            <li>
              <a href="#como-funciona">Como funciona</a>
            </li>
            <li>
              <a href="#localizacao">Localização</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Serviços</h2>
          <ul>
            {prospect.enabledServices.slice(0, 6).map((service) => (
              <li key={service.id}>{service.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contato</h2>
          <ul className="footer__contact">
            <li>
              <Icon name="whatsapp" />
              <a href={whatsappHref}>{prospect.contact.whatsappLabel}</a>
            </li>
            {prospect.contact.phoneLabel ? (
              <li>
                <Icon name="phone" />
                <span>{prospect.contact.phoneLabel}</span>
              </li>
            ) : null}
            {prospect.contact.instagram ? (
              <li>
                <Icon name="instagram" />
                <span>{prospect.contact.instagram}</span>
              </li>
            ) : null}
            {prospect.contact.email ? (
              <li>
                <Icon name="message" />
                <span>{prospect.contact.email}</span>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="footer__legal">
        <p>
          <Icon name="lock" />
          {prospect.business.legalNotice}
        </p>
        <p>
          {prospect.business.name} © {currentYear}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
