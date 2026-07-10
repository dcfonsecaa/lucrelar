import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand brand--light" href="/">LUCRELAR<span>.</span></Link>
          <p>Imóveis escolhidos com critério.<br />Conversas conduzidas com cuidado.</p>
        </div>
        <div><strong>Navegue</strong><Link href="/imoveis">Comprar</Link><Link href="/imoveis">Alugar</Link><Link href="/anuncie-seu-imovel">Anunciar</Link></div>
        <div><strong>Atendimento</strong><Link href="/contato">Fale conosco</Link><span>Seg–Sex, 9h às 18h</span><span>Uberlândia, MG</span></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Lucrelar. Conteúdo demonstrativo.</span><Link href="/admin">Acesso administrativo</Link></div>
    </footer>
  );
}
