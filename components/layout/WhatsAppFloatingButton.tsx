import { createWhatsAppLink } from "../../lib/whatsapp";

export function WhatsAppFloatingButton({ message = "Olá, conheci a Lucrelar pelo site e gostaria de mais informações." }: { message?: string }) {
  return <a className="whatsapp-float" href={createWhatsAppLink(message)} target="_blank" rel="noreferrer" aria-label="Falar com a Lucrelar pelo WhatsApp"><span>◉</span> WhatsApp</a>;
}
