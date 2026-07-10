import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "../../../components/forms/LeadForm";
import { SiteShell } from "../../../components/layout/SiteShell";
import { PropertyCard } from "../../../components/properties/PropertyCard";
import { PropertyGallery } from "../../../components/properties/PropertyGallery";
import { Button } from "../../../components/ui/Button";
import { properties, getPropertyBySlug } from "../../../data/properties";
import { formatCurrency } from "../../../lib/format";
import { propertyWhatsAppLink } from "../../../lib/whatsapp";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const property = getPropertyBySlug((await params).slug);
  return { title: property?.title ?? "Imóvel", description: property?.shortDescription };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const property = getPropertyBySlug((await params).slug);
  if (!property) notFound();
  const related = properties.filter((item) => item.id !== property.id && item.city === property.city).slice(0, 3);

  return (
    <SiteShell>
      <section className="property-detail container">
        <div className="detail-breadcrumb"><Link href="/imoveis">Imóveis</Link><span>/</span><span>{property.title}</span></div>
        <PropertyGallery images={property.images} title={property.title} />
        <div className="detail-grid">
          <article>
            <p className="property-location">{property.purpose} · {property.neighborhood}, {property.city}</p>
            <h1>{property.title}</h1>
            <p className="detail-price">{formatCurrency(property.price)}{property.purpose === "Aluguel" && <small>/mês</small>}</p>
            <div className="detail-specs">
              {property.rooms > 0 && <span><strong>{property.rooms}</strong> quartos</span>}
              <span><strong>{property.bathrooms}</strong> banheiros</span>
              {property.parking > 0 && <span><strong>{property.parking}</strong> vagas</span>}
              <span><strong>{property.area}</strong> m²</span>
            </div>
            <div className="detail-copy">
              <h2>Sobre este imóvel</h2><p>{property.fullDescription}</p>
              <h2>Diferenciais</h2><ul>{property.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
              <h2>Localização</h2>
              <div className="location-card"><span>◎</span><div><strong>{property.neighborhood}, {property.city}</strong><p>Localização aproximada. O endereço completo é informado durante o atendimento.</p></div></div>
            </div>
          </article>
          <aside>
            <LeadForm propertyTitle={property.title} />
            <Button className="detail-whatsapp" href={propertyWhatsAppLink(property.title)} variant="secondary">Falar no WhatsApp ↗</Button>
          </aside>
        </div>
      </section>
      <section className="related container section">
        <div className="section-title-row"><h2>Talvez você também goste</h2><Link href="/imoveis">Ver todos →</Link></div>
        <div className="property-grid">{related.map((item) => <PropertyCard key={item.id} property={item} />)}</div>
      </section>
    </SiteShell>
  );
}
