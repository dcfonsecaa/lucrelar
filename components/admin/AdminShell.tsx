import type { ReactNode } from "react";
import { AdminSidebar } from "./AdminSidebar";
export function AdminShell({ children }: { children: ReactNode }) { return <div className="admin-shell"><AdminSidebar /><main className="admin-main">{children}</main></div>; }
