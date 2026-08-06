import type { CSSProperties } from "react";
import type { RollerConfig } from "@/prospects/types";
import { Icon } from "@/components/ui/Icon";

type AuthorityRollerProps = {
  roller: RollerConfig;
  items?: RollerConfig["items"];
};

export function AuthorityRoller({ roller, items = roller.items }: AuthorityRollerProps) {
  if (!roller.enabled || items.length === 0) {
    return null;
  }

  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className={`authority-roller authority-roller--${roller.direction}`}
      style={{ "--roller-duration": `${roller.speedSeconds}s` } as CSSProperties}
    >
      <div className="authority-roller__track">
        {repeatedItems.map((item, index) => (
          <span key={`${item.label}-${index}`} aria-hidden={index >= items.length}>
            <Icon name={item.icon} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
