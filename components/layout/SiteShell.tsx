import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppFloatingButton } from "./WhatsAppFloatingButton";

export function SiteShell({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /><WhatsAppFloatingButton /></>;
}
