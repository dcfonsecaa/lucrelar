import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Lucrelar | Imóveis escolhidos com critério", template: "%s | Lucrelar" },
  description: "Curadoria imobiliária e atendimento próximo para encontrar, vender ou alugar imóveis em Minas Gerais.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Lucrelar | Imóveis escolhidos com critério",
    description: "Seu próximo lugar começa com uma boa conversa.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Lucrelar — seu próximo lugar começa com uma boa conversa." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucrelar | Imóveis escolhidos com critério",
    description: "Seu próximo lugar começa com uma boa conversa.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
