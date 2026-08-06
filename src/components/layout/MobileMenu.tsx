import type { IconName, ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type MobileMenuProps = {
  prospect: ResolvedProspect;
  links: Array<{ href: string; label: string; icon: IconName }>;
};

export function MobileMenu({ prospect, links }: MobileMenuProps) {
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "menu-mobile"
  });
  const controlId = "mobile-menu-control";

  return (
    <div className="mobile-menu-shell">
      <input
        aria-label="Abrir ou fechar menu"
        className="mobile-menu-control"
        id={controlId}
        type="checkbox"
      />
      <label aria-controls="mobile-menu" className="menu-toggle" htmlFor={controlId}>
        <span className="menu-toggle__label">Menu</span>
        <span />
        <span />
        <span />
      </label>

      <div className="mobile-menu" id="mobile-menu">
        <div className="mobile-menu__top">
          <div>
            <span>Menu rápido</span>
            <strong>{prospect.business.name}</strong>
          </div>
          <label aria-label="Fechar menu" className="mobile-menu__close" htmlFor={controlId}>
            <Icon name="chevron-right" />
          </label>
        </div>

        <nav aria-label="Navegação mobile" className="mobile-menu__nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              <Icon name={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <Button className="mobile-menu__cta" href={whatsappHref} icon="whatsapp" variant="whatsapp">
          Falar no WhatsApp
        </Button>
      </div>
      <label aria-hidden="true" className="mobile-menu__backdrop" htmlFor={controlId} />
    </div>
  );
}
