import type { IconName } from "@/prospects/types";
import { CountUp } from "@/components/animations/CountUp";
import { Icon } from "./Icon";

type StatCardProps = {
  icon: IconName;
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export function StatCard({ icon, value, suffix = "", label, decimals = 0 }: StatCardProps) {
  return (
    <div className="stat-card">
      <Icon className="stat-card__icon" name={icon} />
      <strong>
        <CountUp decimals={decimals} label={`${value}${suffix} ${label}`} suffix={suffix} value={value} />
      </strong>
      <span>{label}</span>
    </div>
  );
}
