import Link from "next/link";

export function AdminSidebar() {
  return <aside className="admin-sidebar"><Link className="brand brand--light" href="/">LUCRELAR<span>.</span></Link><p>Administração</p><nav><Link href="/admin">⌂ Visão geral</Link><Link href="/admin/imoveis">□ Imóveis</Link><span>◇ Leads <small>Em breve</small></span></nav><Link className="admin-exit" href="/">← Voltar ao site</Link></aside>;
}
