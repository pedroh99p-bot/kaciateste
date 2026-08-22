import type { AssetImage, IconName } from "@/prospects/types";
import { CountUp } from "@/components/animations/CountUp";
import { Icon } from "./Icon";

type StatCardProps = {
  icon: IconName;
  image?: AssetImage | null;
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  stars?: number | null;
};

export function StatCard({
  icon,
  image,
  value,
  suffix = "",
  label,
  decimals = 0,
  stars
}: StatCardProps) {
  return (
    <div className="stat-card">
      {image?.src ? (
        <img
          alt={image.alt}
          className="stat-card__brand"
          height={image.height}
          loading="lazy"
          src={image.src}
          width={image.width}
        />
      ) : (
        <Icon className="stat-card__icon" name={icon} />
      )}
      <strong>
        <CountUp decimals={decimals} label={`${value}${suffix} ${label}`} suffix={suffix} value={value} />
      </strong>
      <div className="stat-card__meta">
        {stars ? (
          <span aria-label={`${stars} estrelas`} className="stat-card__stars rating-stars" role="img">
            {"★".repeat(stars)}
          </span>
        ) : null}
        <span className="stat-card__label">{label}</span>
      </div>
    </div>
  );
}
