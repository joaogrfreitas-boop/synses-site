export const site = {
  name: "Synses",
  url: "https://synses.app",
  tagline: "Seu negócio, entendido.",
  description:
    "Consultor de negócios com IA para PMEs brasileiras. Saiba quanto você ganha no que vende e quanto precisa vender para cobrir seus custos. Em piloto fechado.",
};

// Dados oficiais do CNPJ. Um valor entre colchetes conta como pendente e aparece destacado no site.
export const company = {
  legalName: "JF Advice LTDA",
  address: "Av. Paulista, 1106, Sala 01 · Bela Vista · São Paulo/SP · CEP 01310-914",
  addressLines: ["Av. Paulista, 1106, Sala 01 · Bela Vista", "São Paulo/SP · CEP 01310-914"],
  cnpj: "07.453.406/0001-47",
  contactEmail: "contact@synses.app",
  privacyEmail: "contact@synses.app",
  privacyContact: "João Freitas",
};

export const legalUpdatedAt = "15 de outubro de 2026";

export function isPending(value: string) {
  return value.startsWith("[");
}
