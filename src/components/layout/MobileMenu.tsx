"use client";

import { useEffect, useState } from "react";
import type { IconName, ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type MobileMenuProps = {
  prospect: ResolvedProspect;
  links: Array<{ href: string; label: string; icon: IconName }>;
};

export function MobileMenu({ prospect, links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "menu-mobile"
  });

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", isOpen);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="mobile-menu-shell">
      <button
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="menu-toggle"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="menu-toggle__label">Menu</span>
        <span className="menu-toggle__icon" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>

      <div aria-hidden={!isOpen} className={`mobile-menu${isOpen ? " is-open" : ""}`} id="mobile-menu">
        <div className="mobile-menu__top">
          <div>
            <span>Menu rápido</span>
            <strong>{prospect.business.name}</strong>
          </div>
          <button
            aria-label="Fechar menu"
            className="mobile-menu__close"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <Icon name="chevron-right" />
          </button>
        </div>

        <nav aria-label="Navegação mobile" className="mobile-menu__nav">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              <Icon name={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <Button className="mobile-menu__cta" href={whatsappHref} icon="whatsapp" variant="whatsapp">
          {prospect.copy.primaryCta}
        </Button>
      </div>
      <button
        aria-hidden={!isOpen}
        aria-label="Fechar menu"
        className={`mobile-menu__backdrop${isOpen ? " is-open" : ""}`}
        onClick={() => setIsOpen(false)}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />
    </div>
  );
}
