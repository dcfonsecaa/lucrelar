export type PropertyPurpose = "Venda" | "Aluguel";
export type PropertyStatus = "Ativo" | "Rascunho" | "Inativo";

export interface Property {
  id: string;
  slug: string;
  title: string;
  purpose: PropertyPurpose;
  type: string;
  city: string;
  neighborhood: string;
  price: number;
  rooms: number;
  bathrooms: number;
  parking: number;
  area: number;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  images: string[];
  featured: boolean;
  status: PropertyStatus;
  videoUrl?: string;
}
