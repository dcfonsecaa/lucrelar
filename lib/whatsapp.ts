export const WHATSAPP_NUMBER = "5534999999999";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function propertyWhatsAppLink(title: string) {
  return createWhatsAppLink(
    `Olá, conheci este imóvel no site da Lucrelar e gostaria de receber mais informações sobre: ${title}.`,
  );
}
