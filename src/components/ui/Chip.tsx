import type { IconName } from "@/prospects/types";
import { Icon } from "./Icon";

type ChipProps = {
  icon: IconName;
  label: string;
};

export function Chip({ icon, label }: ChipProps) {
  return (
    <span className="chip">
      <Icon className="chip__icon" name={icon} />
      <span>{label}</span>
    </span>
  );
}
