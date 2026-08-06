import type { ReactNode } from "react";
import type { IconName } from "@/prospects/types";
import { Icon } from "./Icon";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "whatsapp" | "ghost";
  icon?: IconName;
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  ariaLabel
}: ButtonProps) {
  return (
    <a aria-label={ariaLabel} className={`button button--${variant} ${className}`} href={href}>
      {icon ? <Icon className="button__icon" name={icon} /> : null}
      <span>{children}</span>
      <Icon className="button__chevron" name="chevron-right" />
    </a>
  );
}
