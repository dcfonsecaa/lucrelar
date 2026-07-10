import Link from "next/link";
import { SiteShell } from "../components/layout/SiteShell";
import { PropertyCard } from "../components/properties/PropertyCard";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { properties } from "../data/properties";
import { createWhatsAppLink } from "../lib/whatsapp";

export default function Home() {
  const featured = properties.filter((property) => property.featured && property.status === "Ativo").slice(0, 3);
  return (
    <SiteShell>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Escolhas que fazem sentido</p>
            <h1>Seu próximo lugar começa com uma boa conversa.</h1>
            <p className="hero-lead">Curadoria imobiliária e atendimento próximo para encontrar o imóvel certo — sem perder tempo.</p>
            <div className="hero-actions"><Button href="/imoveis">Encontrar um imóvel</Button><Button href="/anuncie-seu-imovel" variant="ghost">Anunciar meu imóvel <span>↗</span></Button></div>
            <div className="hero-proof"><strong>+120</strong><span>conversas iniciadas<br />todos os meses</span><i /><strong>4,9</strong><span>experiência média<br />dos clientes</span></div>
          </div>
          <div className="hero-visual">
            <img src={properties[0].images[0]} alt="Residência contemporânea em destaque" />
            <div className="hero-card"><p>Destaque da semana</p><strong>Jardim Karaíba</strong><span>4 suítes · 310 m²</span><Link href={`/imoveis/${properties[0].slug}`}>Conhecer imóvel →</Link></div>
            <span className="hero-index">01 / 06</span>
          </div>
        </div>
      </section>

      <section className="quick-search-wrap"><form className="container quick-search" action="/imoveis"><label>O que você procura?<select name="purpose"><option>Comprar</option><option>Alugar</option></select></label><label>Tipo de imóvel<select name="type"><option>Todos os tipos</option><option>Casa</option><option>Apartamento</option><option>Terreno</option></select></label><label>Onde?<select name="city"><option>Todas as cidades</option><option>Uberlândia</option><option>Uberaba</option></select></label><label>Até quanto?<select name="price"><option>Qualquer valor</option><option>R$ 500 mil</option><option>R$ 1 milhão</option><option>R$ 2 milhões</option></select></label><Button type="submit">Buscar imóveis →</Button></form></section>

      <section className="section container">
        <div className="section-title-row"><SectionHeader eyebrow="Curadoria Lucrelar" title="Imóveis que merecem sua atenção." text="Uma seleção enxuta, com informações claras e imóveis que fazem sentido para o seu momento." /><Link className="text-link" href="/imoveis">Ver todos os imóveis →</Link></div>
        <div className="property-grid">{featured.map((property) => <PropertyCard property={property} key={property.id} />)}</div>
      </section>

      <section className="process-section"><div className="container"><SectionHeader eyebrow="Simples, como deve ser" title="Como a Lucrelar funciona." /><div className="process-grid">{[["01","Você conta o que busca","Entendemos seu momento, prioridades e o que realmente importa."],["02","A gente faz a curadoria","Selecionamos as melhores opções, sem excesso e sem ruído."],["03","A conversa evolui","Organizamos visitas e acompanhamos você em cada decisão."]].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="owner-teaser container">
        <div className="owner-image"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85" alt="Profissional apresentando um imóvel" /><span>Para proprietários</span></div>
        <div className="owner-copy"><p className="eyebrow">Seu imóvel, bem apresentado</p><h2>Mais do que anunciar.<br />É encontrar a pessoa certa.</h2><p>Cuidamos da apresentação, da divulgação e das primeiras conversas para que você receba contatos realmente interessados.</p><ul><li>✓ Curadoria e posicionamento</li><li>✓ Fotos e apresentação profissional</li><li>✓ Atendimento rápido pelo WhatsApp</li></ul><Button href="/anuncie-seu-imovel">Quero anunciar meu imóvel</Button></div>
      </section>

      <section className="benefits section container"><SectionHeader eyebrow="Uma experiência diferente" title="Menos ruído. Mais cuidado." /><div className="benefit-grid">{[["◇","Curadoria de verdade","Selecionamos imóveis e oportunidades com critérios claros."],["◌","Atendimento humano","Você conversa com alguém que entende o seu momento."],["↗","Agilidade no contato","Do interesse à conversa em poucos cliques, direto no WhatsApp."],["✦","Apresentação premium","Imóveis valorizados por conteúdo, imagem e contexto."]].map(([i,t,d]) => <article key={t}><span>{i}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

      <section className="final-cta"><div className="container"><p className="eyebrow">Podemos ajudar?</p><h2>O imóvel certo pode estar<br />a uma conversa de distância.</h2><p>Conte o que você procura. A gente começa por aí.</p><Button href={createWhatsAppLink("Olá, conheci a Lucrelar pelo site e gostaria de ajuda para encontrar um imóvel.")}>Conversar pelo WhatsApp ↗</Button></div></section>
    </SiteShell>
  );
}
