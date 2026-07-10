"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["/imoveis", "Imóveis"],
  ["/anuncie-seu-imovel", "Anuncie seu imóvel"],
  ["/contato", "Contato"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Lucrelar, página inicial">LUCRELAR<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="header-contact" href="/contato">Fale com a gente <span>↗</span></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu">☰</button>
      </div>
      {open && (
        <nav className="mobile-menu" aria-label="Navegação móvel">
          {links.map(([href, label]) => <Link onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}
          <Link onClick={() => setOpen(false)} href="/admin">Área administrativa</Link>
        </nav>
      )}
    </header>
  );
}
