import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { SectionHeading } from "@/components/ui/SectionHeading";

type LocationSectionProps = {
  prospect: ResolvedProspect;
};

export function LocationSection({ prospect }: LocationSectionProps) {
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "localizacao"
  });
  const routeHref = prospect.location.routeUrl;

  return (
    <section
      className="section location"
      data-section-tone={prospect.layout.contentTone === "dark" ? "dark" : "light"}
      id="localizacao"
    >
      <div className="location__header">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow={prospect.copy.locationEyebrow}
            headline={prospect.copy.locationHeadline}
            icon="map"
          />
          <p className="location__address">
            <Icon name="map" />
            <span>
              {prospect.location.address}
              <br />
              {prospect.location.city} — {prospect.location.state}
            </span>
          </p>
          <div className="location__actions">
            {routeHref ? (
              <Button href={routeHref} icon="route" variant="primary">
                Traçar rota
              </Button>
            ) : null}
            <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
              {prospect.copy.primaryCta}
            </Button>
          </div>
        </Reveal>
        <Reveal className="location__map" preset="image-reveal">
          {prospect.location.mapEmbedUrl ? (
            <iframe
              loading="lazy"
              src={prospect.location.mapEmbedUrl}
              title={`Mapa de ${prospect.business.name}`}
            />
          ) : (
            <ImageWithFallback
              fallback={prospect.assets.mapFallback}
              image={prospect.assets.mapFallback}
              loading="lazy"
            />
          )}
        </Reveal>
      </div>
      <div className="location__cards">
        <Reveal>
          <article>
            <Icon name="phone" />
            <h3>Telefone</h3>
            <p>{prospect.contact.phoneLabel ?? prospect.contact.whatsappLabel}</p>
          </article>
        </Reveal>
        <Reveal delay={40}>
          <article>
            <Icon name="instagram" />
            <h3>Instagram</h3>
            <p>{prospect.contact.instagram ?? "Informe o Instagram"}</p>
            {prospect.contact.instagramUrl ? (
              <a
                aria-label={`Abrir o Instagram de ${prospect.business.name}`}
                className="location__card-cta"
                href={prospect.contact.instagramUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span>Ver perfil</span>
                <Icon name="chevron-right" />
              </a>
            ) : null}
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article>
            <Icon name="clock" />
            <h3>Horário</h3>
            <p>{prospect.location.hours.join(" · ")}</p>
          </article>
        </Reveal>
        <Reveal delay={120}>
          <article>
            <Icon name="map" />
            <h3>Área atendida</h3>
            <p>{prospect.location.region}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
