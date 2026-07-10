import Link from "next/link";
import type { Property } from "../../types/property";
import { formatCurrency } from "../../lib/format";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <Link href={`/imoveis/${property.slug}`} className="property-card__image">
        <img src={property.images[0]} alt={property.title} loading="lazy" />
        <span>{property.purpose}</span>
      </Link>
      <div className="property-card__body">
        <p className="property-location">{property.neighborhood} · {property.city}</p>
        <h3><Link href={`/imoveis/${property.slug}`}>{property.title}</Link></h3>
        <div className="property-specs">
          {property.rooms > 0 && <span>{property.rooms} quartos</span>}
          <span>{property.area} m²</span>
          {property.parking > 0 && <span>{property.parking} vagas</span>}
        </div>
        <div className="property-card__footer">
          <strong>{formatCurrency(property.price)}{property.purpose === "Aluguel" && <small>/mês</small>}</strong>
          <Link href={`/imoveis/${property.slug}`} aria-label={`Ver ${property.title}`}>Ver imóvel →</Link>
        </div>
      </div>
    </article>
  );
}
