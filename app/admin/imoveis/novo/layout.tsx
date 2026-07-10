import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Novo imóvel",
  description: "Cadastro demonstrativo de um novo imóvel no painel Lucrelar.",
};

export default function NewPropertyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
