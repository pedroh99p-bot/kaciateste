import type { ResolvedProspect } from "@/prospects/types";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { SectionHeading } from "@/components/ui/SectionHeading";

type DigitalProductSectionProps = {
  prospect: ResolvedProspect;
};

export function DigitalProductSection({ prospect }: DigitalProductSectionProps) {
  const product = prospect.digitalProduct;

  if (!product.enabled || !product.checkoutUrl || !product.cover?.src) {
    return null;
  }

  return (
    <section
      className="section digital-product commercial-section"
      data-section-tone="dark"
      id="manual-cac"
    >
      <div className="digital-product__card">
        <Reveal className="digital-product__intro">
          <SectionHeading
            align="left"
            eyebrow={product.eyebrow}
            headline={product.headline}
            icon="document"
            subtitle={product.subtitle}
          />
          <p className="digital-product__description">{product.description}</p>
        </Reveal>

        <Reveal className="digital-product__visual" preset="image-reveal" delay={80}>
          <span aria-hidden="true" className="digital-product__halo" />
          <ImageWithFallback
            className="digital-product__cover"
            fallback={prospect.assets.symbol}
            image={product.cover}
            sizes="(max-width: 759px) 72vw, 340px"
          />
        </Reveal>

        <Reveal className="digital-product__purchase" delay={130}>
          <ul className="digital-product__benefits">
            {product.benefits.map((benefit) => (
              <li key={benefit.label}>
                <span className="digital-product__benefit-icon">
                  <Icon name={benefit.icon} />
                </span>
                <span>{benefit.label}</span>
              </li>
            ))}
          </ul>

          {product.price ? (
            <div className="digital-product__price">
              {product.pricePrefix ? <span>{product.pricePrefix}</span> : null}
              <strong>{product.price}</strong>
              {product.paymentNote ? <p>{product.paymentNote}</p> : null}
            </div>
          ) : null}

          <Button
            ariaLabel={`${product.ctaLabel} no checkout`}
            className="digital-product__cta"
            href={product.checkoutUrl}
            icon="document"
          >
            {product.ctaLabel}
          </Button>

          {product.disclaimer ? (
            <p className="digital-product__disclaimer">
              <Icon name="shield" />
              <span>{product.disclaimer}</span>
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
