"use client";

import { useMemo, useState } from "react";
import type { Property } from "../../types/property";
import { EmptyState } from "../ui/EmptyState";
import { PropertyCard } from "./PropertyCard";

export function PropertyCatalog({ properties }: { properties: Property[] }) {
  const [purpose, setPurpose] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const result = properties.filter((p) => (!purpose || p.purpose === purpose) && (!type || p.type === type) && (!city || p.city === city));
    return [...result].sort((a, b) => sort === "lower" ? a.price - b.price : sort === "higher" ? b.price - a.price : Number(b.featured) - Number(a.featured));
  }, [properties, purpose, type, city, sort]);

  return (
    <>
      <div className="catalog-controls">
        <div className="filters">
          <label>Finalidade<select value={purpose} onChange={(e) => setPurpose(e.target.value)}><option value="">Todas</option><option>Venda</option><option>Aluguel</option></select></label>
          <label>Tipo<select value={type} onChange={(e) => setType(e.target.value)}><option value="">Todos</option><option>Casa</option><option>Apartamento</option><option>Loft</option><option>Cobertura</option><option>Terreno</option></select></label>
          <label>Cidade<select value={city} onChange={(e) => setCity(e.target.value)}><option value="">Todas</option><option>Uberlândia</option><option>Uberaba</option><option>Araguari</option></select></label>
        </div>
        <label className="sort">Ordenar por<select value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Destaques</option><option value="lower">Menor preço</option><option value="higher">Maior preço</option></select></label>
      </div>
      <p className="result-count">{filtered.length} {filtered.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}</p>
      {filtered.length ? <div className="property-grid">{filtered.map((property) => <PropertyCard key={property.id} property={property} />)}</div> : <EmptyState />}
      <nav className="pagination" aria-label="Paginação"><button className="active">1</button><button>2</button><button>3</button><button aria-label="Próxima página">→</button></nav>
    </>
  );
}
