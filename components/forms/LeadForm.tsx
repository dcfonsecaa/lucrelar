"use client";

import { Button } from "../ui/Button";
import { Input, Textarea } from "../ui/FormControls";

export function LeadForm({ propertyTitle }: { propertyTitle?: string }) {
  return (
    <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
      <p className="eyebrow">Atendimento pessoal</p>
      <h3>Vamos conversar?</h3>
      <p>Deixe seus dados e um especialista entrará em contato.</p>
      <label>Nome<Input required name="name" placeholder="Como podemos chamar você?" /></label>
      <label>WhatsApp<Input required name="phone" type="tel" placeholder="(34) 99999-9999" /></label>
      <label>Mensagem<Textarea name="message" defaultValue={propertyTitle ? `Tenho interesse em ${propertyTitle}.` : ""} /></label>
      <Button type="submit">Solicitar atendimento</Button>
      <small>Ao enviar, você concorda em receber contato da Lucrelar.</small>
    </form>
  );
}
