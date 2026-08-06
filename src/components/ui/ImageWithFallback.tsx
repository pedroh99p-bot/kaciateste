import type { AssetImage } from "@/prospects/types";

type ImageWithFallbackProps = {
  image: AssetImage | null;
  fallback: AssetImage;
  className?: string;
  loading?: "eager" | "lazy";
  sizes?: string;
};

export function ImageWithFallback({
  image,
  fallback,
  className = "",
  loading = "lazy",
  sizes
}: ImageWithFallbackProps) {
  const finalImage = image?.src ? image : fallback;

  return (
    <img
      alt={finalImage.alt}
      className={className}
      decoding="async"
      fetchPriority={loading === "eager" ? "high" : "auto"}
      height={finalImage.height}
      loading={loading}
      sizes={sizes}
      src={finalImage.src ?? fallback.src ?? ""}
      style={{
        objectFit: finalImage.objectFit,
        objectPosition: finalImage.objectPosition ?? "center"
      }}
      width={finalImage.width}
    />
  );
}
