export function AdminHeader({ title, eyebrow = "Painel Lucrelar" }: { title: string; eyebrow?: string }) {
  return <header className="admin-header"><div><p>{eyebrow}</p><h1>{title}</h1></div><div className="admin-user"><span>LM</span><div><strong>Lucrelar</strong><small>Administrador</small></div></div></header>;
}
