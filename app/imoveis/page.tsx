import type { Metadata } from "next";
import { SiteShell } from "../../components/layout/SiteShell";
import { PropertyCatalog } from "../../components/properties/PropertyCatalog";
import { properties } from "../../data/properties";

export const metadata: Metadata = { title: "Imóveis", description: "Imóveis selecionados para comprar ou alugar." };
export default function PropertiesPage() {
  return <SiteShell><section className="page-hero container"><p className="eyebrow">Curadoria Lucrelar</p><h1>Encontre um lugar<br />que combine com você.</h1><p>Explore imóveis escolhidos com critério e fale com a gente quando algum fizer sentido.</p></section><section className="catalog container"><PropertyCatalog properties={properties.filter((p) => p.status === "Ativo")} /></section></SiteShell>;
}
