"use client";
import { useState } from "react";
import Link from "next/link";
import { AdminHeader } from "./AdminHeader";
import { AdminShell } from "./AdminShell";
import { Input } from "../ui/FormControls";
import { Button } from "../ui/Button";
import { properties } from "../../data/properties";
import { formatCurrency } from "../../lib/format";

export function AdminDashboard() {
  const [logged, setLogged] = useState(false);
  if (!logged) return <div className="admin-login"><section><Link className="brand" href="/">LUCRELAR<span>.</span></Link><p className="eyebrow">Área reservada</p><h1>Bem-vindo de volta.</h1><p>Acesse o painel demonstrativo para gerenciar os imóveis da Lucrelar.</p><form onSubmit={(e) => { e.preventDefault(); setLogged(true); }}><label>E-mail<Input type="email" defaultValue="admin@lucrelar.com.br" /></label><label>Senha<Input type="password" defaultValue="demonstracao" /></label><Button type="submit">Entrar no painel</Button></form><small>Interface demonstrativa — sem autenticação real nesta etapa.</small></section><div className="admin-login-image"><span>Painel imobiliário<br /><strong>simples e organizado.</strong></span></div></div>;
  return <AdminShell><AdminHeader title="Visão geral" /><div className="admin-content"><div className="admin-welcome"><div><p>Bom dia, Lucrelar.</p><h2>A operação está em movimento.</h2></div><Link className="button button--primary" href="/admin/imoveis/novo">+ Novo imóvel</Link></div><div className="stat-grid"><article><span>Imóveis ativos</span><strong>04</strong><small>+1 neste mês</small></article><article><span>Leads recebidos</span><strong>28</strong><small>últimos 30 dias</small></article><article><span>Conversão WhatsApp</span><strong>12,4%</strong><small>+2,1% no período</small></article><article><span>Visitas agendadas</span><strong>07</strong><small>esta semana</small></article></div><div className="admin-panel"><div className="admin-panel-head"><div><p>Portfólio</p><h3>Imóveis recentes</h3></div><Link href="/admin/imoveis">Ver todos →</Link></div><div className="admin-table">{properties.slice(0,4).map(p => <div key={p.id}><img src={p.images[0]} alt="" /><span><strong>{p.title}</strong><small>{p.neighborhood} · {p.city}</small></span><b>{formatCurrency(p.price)}</b><i className={`status status--${p.status.toLowerCase()}`}>{p.status}</i></div>)}</div></div><div className="leads-future"><span>◇</span><div><h3>Gestão de leads</h3><p>Esta área está preparada para receber contatos, acompanhar atendimentos e medir conversões na próxima etapa.</p></div><small>Em breve</small></div></div></AdminShell>;
}
