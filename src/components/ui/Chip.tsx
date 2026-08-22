import type { AssetImage, IconName } from "@/prospects/types";
import { Icon } from "./Icon";

type ChipProps = {
  icon: IconName;
  label: string;
  image?: AssetImage | null;
  stars?: number | null;
};

export function Chip({ icon, image, label, stars }: ChipProps) {
  return (
    <span className="chip">
      {image?.src ? (
        <img
          alt={image.alt}
          className="chip__image"
          height={image.height}
          loading="lazy"
          src={image.src}
          width={image.width}
        />
      ) : (
        <Icon className="chip__icon" name={icon} />
      )}
      {stars ? (
        <span className="chip__rating">
          <span aria-label={`${stars} estrelas`} className="rating-stars" role="img">
            {"★".repeat(stars)}
          </span>
          <span>{label}</span>
        </span>
      ) : (
        <span>{label}</span>
      )}
    </span>
  );
}
