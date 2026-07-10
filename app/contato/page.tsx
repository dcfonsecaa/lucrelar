import type { Metadata } from "next";
import { LeadForm } from "../../components/forms/LeadForm";
import { SiteShell } from "../../components/layout/SiteShell";
import { Button } from "../../components/ui/Button";
import { createWhatsAppLink } from "../../lib/whatsapp";
export const metadata: Metadata = { title: "Contato", description: "Converse com a equipe Lucrelar." };
export default function ContactPage() { return <SiteShell><section className="contact-page container"><div><p className="eyebrow">Fale com a Lucrelar</p><h1>Uma boa escolha começa com uma conversa.</h1><p>Quer encontrar um imóvel, anunciar ou tirar uma dúvida? Conte com a gente.</p><Button href={createWhatsAppLink("Olá, conheci a Lucrelar pelo site e gostaria de conversar.")}>Conversar pelo WhatsApp ↗</Button><div className="contact-info"><span><small>Atendimento</small>Segunda a sexta, 9h às 18h</span><span><small>Região</small>Triângulo Mineiro, MG</span><span><small>E-mail demonstrativo</small>contato@lucrelar.com.br</span></div></div><LeadForm /></section></SiteShell>; }
