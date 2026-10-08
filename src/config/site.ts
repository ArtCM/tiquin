// Dados centrais do site. Valores marcados com TODO são provisórios.

export const siteConfig = {
  name: "Tiquin Market",
  description:
    "Mini mercados autônomos para condomínios, empresas, hotéis e academias. Projeto sem custo, funcionamento 24h e reposição frequente.",
  url: "https://tiquinmarket.com.br", // TODO: confirmar domínio
  contact: {
    whatsapp: "5511999999999", // TODO: número real (somente dígitos, com DDI)
    phoneDisplay: "(11) 99999-9999", // TODO
    email: "contato@tiquinmarket.com.br", // TODO
    address: "Rua Exemplo, 123 — São Paulo, SP", // TODO
  },
  social: {
    instagram: "https://instagram.com/tiquinmarket", // TODO
    linkedin: "https://linkedin.com/company/tiquinmarket", // TODO
  },
} as const;

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/vantagens", label: "Vantagens" },
  { href: "/nossas-lojas", label: "Nossas lojas" },
  { href: "/contato", label: "Contato" },
] as const;

export function whatsappLink(
  message = "Olá! Gostaria de saber mais sobre o Tiquin Market."
) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

type Stat = {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  /** Texto fixo exibido no lugar do número animado */
  text?: string;
};

// TODO: números provisórios — ajustar com os dados reais da operação
export const stats: Stat[] = [
  { value: 50, prefix: "+", suffix: "", label: "lojas instaladas" },
  { value: 24, prefix: "", suffix: "h", label: "aberto todos os dias" },
  { value: 600, prefix: "+", suffix: "", label: "produtos no mix" },
  { value: 0, prefix: "", suffix: "", label: "custo para o condomínio", text: "ZERO" },
];

// Fotos provisórias (Unsplash). Trocar por fotos reais em /public/images.
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const images = {
  aisle: unsplash("1604719312566-8912e9227c6a"),
  aisleBright: unsplash("1578916171728-46686eac8d58"),
  shelves: unsplash("1534723452862-4c874018d66d"),
  fridges: unsplash("1601599561213-832382fd07ba"),
  wine: unsplash("1506377247377-2a5b3b417ebb"),
  fruits: unsplash("1583258292688-d0213dc5a3a8"),
  produce: unsplash("1550989460-0adf9ea622e2"),
  vegetables: unsplash("1542838132-92c53300491e"),
  building: unsplash("1574362848149-11496d93a7c7"),
  livingRoom: unsplash("1560448204-e02f11c3d0e2"),
  payment: unsplash("1556740758-90de374c12ad"),
  checkout: unsplash("1556742049-0cfed4f6a45d"),
  team: unsplash("1600880292203-757bb62b4baf"),
} as const;
