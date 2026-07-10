"use client";

import { Button } from "../ui/Button";
import { Input, Select, Textarea } from "../ui/FormControls";

export function OwnerPropertyForm() {
  return (
    <form className="owner-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-heading"><span>01</span><div><h3>Conte sobre seu imóvel</h3><p>Leva menos de dois minutos. Depois, nossa equipe cuida da conversa.</p></div></div>
      <div className="form-grid">
        <label>Seu nome<Input required placeholder="Nome completo" /></label>
        <label>WhatsApp<Input required type="tel" placeholder="(34) 99999-9999" /></label>
        <label>Tipo do imóvel<Select required defaultValue=""><option value="" disabled>Selecione</option><option>Casa</option><option>Apartamento</option><option>Terreno</option><option>Comercial</option></Select></label>
        <label>Finalidade<Select required defaultValue=""><option value="" disabled>Selecione</option><option>Venda</option><option>Aluguel</option></Select></label>
        <label>Cidade<Input required placeholder="Cidade" /></label>
        <label>Bairro<Input required placeholder="Bairro" /></label>
        <label className="full">Conte um pouco sobre o imóvel<Textarea placeholder="Quartos, área, diferenciais e faixa de valor..." /></label>
      </div>
      <Button type="submit">Quero anunciar meu imóvel</Button>
    </form>
  );
}
