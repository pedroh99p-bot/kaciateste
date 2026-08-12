"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ResolvedProspect } from "@/prospects/types";
import { Icon } from "@/components/ui/Icon";
import { QuickConsult } from "./QuickConsult";

type QuickConsultModalProps = {
  prospect: ResolvedProspect;
};

const focusableSelector = [
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "a[href]",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

export function QuickConsultModal({ prospect }: QuickConsultModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const descriptionId = useId();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.classList.add("quick-consult-modal-open");

    const focusTimer = window.setTimeout(() => {
      dialog?.querySelector<HTMLElement>("input, button, select, textarea")?.focus();
    }, 30);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialog) {
        return;
      }

      const focusableItems = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));
      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (!firstItem || !lastItem) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.classList.remove("quick-consult-modal-open");
      document.removeEventListener("keydown", handleKeyDown);
      (previouslyFocused ?? triggerRef.current)?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="quick-consult-launcher"
        onClick={() => setIsOpen(true)}
        ref={triggerRef}
        type="button"
      >
        <Icon name="message" />
        <span>Consulta rápida</span>
      </button>

      {isMounted && isOpen ? createPortal(
        <div
          className="quick-consult-modal__backdrop"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setIsOpen(false);
            }
          }}
        >
          <div
            aria-describedby={descriptionId}
            aria-labelledby={titleId}
            aria-modal="true"
            className="quick-consult-modal"
            ref={dialogRef}
            role="dialog"
          >
            <div className="quick-consult-modal__heading">
              <div>
                <span>Pré-atendimento</span>
                <h2 id={titleId}>Consulta rápida</h2>
                <p id={descriptionId}>Organize as informações do seu caso antes de abrir o WhatsApp.</p>
              </div>
              <button aria-label="Fechar consulta rápida" onClick={() => setIsOpen(false)} type="button">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <QuickConsult prospect={prospect} />
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}
