import { ArrowUpRight, CalendarCheck, Refrigerator, ScanLine, Thermometer, Truck, Award } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CircleImage } from "@/components/brand/circle-image";
import { ctaVariants } from "@/components/layout/cta-styles";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeading } from "@/components/sections/section-heading";
import { images, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nossas lojas",
  description:
    "Conheça as lojas Tiquin Market: equipamentos de qualidade, fornecedores selecionados e reposição frequente.",
};

// Círculo do tamanho da menor dimensão da célula (linha = 14rem / 16rem)
const circle =
  "aspect-square self-center justify-self-center rounded-full w-[min(100%,14rem)] sm:w-[min(100%,16rem)]";

// TODO: substituir pelas fotos reais das lojas
const gallery = [
  { src: images.fridges, alt: "Geladeiras de bebidas", className: "sm:col-span-2 sm:row-span-2 rounded-[2.5rem]" },
  { src: images.wine, alt: "Adega de vinhos", className: circle },
  { src: images.shelves, alt: "Prateleiras de mercearia", className: "rounded-[2rem]" },
  { src: images.fruits, alt: "Frutas frescas", className: "rounded-[2rem]" },
  { src: images.produce, alt: "Hortifrúti", className: circle },
  { src: images.aisleBright, alt: "Corredor da loja", className: "sm:col-span-2 rounded-[2.5rem]" },
  { src: images.payment, alt: "Pagamento no autoatendimento", className: "rounded-[2rem]" },
  { src: images.vegetables, alt: "Legumes e verduras", className: "rounded-[2rem]" },
];

const restock = [
  { icon: CalendarCheck, title: "Rotas programadas", text: "Visitas várias vezes por semana, de acordo com o giro de cada loja." },
  { icon: ScanLine, title: "Estoque em tempo real", text: "O sistema avisa o que está acabando antes que falte." },
  { icon: Truck, title: "Validade sob controle", text: "Itens próximos do vencimento são retirados na reposição." },
];

const quality = [
  {
    icon: Refrigerator,
    title: "Equipamentos de linha profissional",
    text: "Geladeiras e freezers de portas de vidro, com iluminação LED e baixo consumo de energia.",
  },
  {
    icon: Thermometer,
    title: "Temperatura monitorada",
    text: "Sensores acompanham a refrigeração 24h para garantir a qualidade de cada produto.",
  },
  {
    icon: ScanLine,
    title: "Autoatendimento moderno",
    text: "Totem intuitivo, rápido e seguro, com pagamento por cartão e Pix.",
  },
  {
    icon: Award,
    title: "Fornecedores selecionados",
    text: "Marcas líderes e parceiros locais, escolhidos por qualidade, procedência e preço justo.",
  },
];

export default function NossasLojasPage() {
  return (
    <>
      <PageHero
        tag="Nossas lojas"
        title={
          <>
            Lojas que dão <span className="text-amarelo">gosto</span> de visitar
          </>
        }
        description="Ambientes bem iluminados, organizados e abastecidos, com o mix certo para cada condomínio."
        image={images.shelves}
        imageAlt="Prateleiras organizadas de um mini mercado"
      >
        <Link href="/contato" className={ctaVariants({ size: "lg" })}>
          Quero uma loja no meu condomínio
          <ArrowUpRight />
        </Link>
      </PageHero>

      {/* Mídia */}
      <Section>
        <SectionHeading
          tag="Galeria"
          title="Um pouco das nossas lojas"
          description="Cada projeto é único, mas todos têm o mesmo cuidado com os detalhes."
        />
        <div className="mt-14 grid auto-rows-[14rem] grid-cols-2 gap-3 sm:auto-rows-[16rem] lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.alt}
              delay={(i % 4) * 80}
              className={cn("group relative overflow-hidden", item.className)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Reposição frequente */}
      <Section className="pt-0 sm:pt-0">
        <div className="bg-card grid items-center gap-12 rounded-[2.5rem] p-6 ring-1 ring-grafite/5 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              tag="Reposição frequente"
              title="Prateleira cheia, sempre"
              description="Nossa equipe acompanha cada loja de perto para que o morador encontre o que procura — na hora que precisar."
            />
            <ul className="mt-10 space-y-3">
              {restock.map(({ icon: Icon, title, text }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 100}
                  className="bg-creme flex items-center gap-4 rounded-full p-2 pr-6"
                >
                  <span className="bg-grafite text-amarelo flex size-14 shrink-0 items-center justify-center rounded-full">
                    <Icon className="size-6" />
                  </span>
                  <span>
                    <span className="block font-extrabold">{title}</span>
                    <span className="text-muted-foreground block text-sm">{text}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={150} className="relative mx-auto w-full max-w-md">
            <CircleImage src={images.produce} alt="Produtos frescos sendo repostos" />
            <span className="bg-amarelo animate-float absolute -top-2 right-6 size-20 rounded-full" />
            <span className="bg-grafite absolute bottom-6 -left-2 size-8 rounded-full" />
          </Reveal>
        </div>
      </Section>

      {/* Qualidade */}
      <Section className="pt-0 sm:pt-0">
        <SectionHeading
          align="center"
          tag="Qualidade"
          title="Equipamentos e fornecedores de primeira"
          description="Investimos no que faz diferença na experiência de compra e na conservação dos produtos."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quality.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 80}
              className="bg-card hover:bg-grafite hover:text-creme group rounded-[2rem] p-7 ring-1 ring-grafite/5 transition-colors duration-300"
            >
              <span className="bg-amarelo flex size-14 items-center justify-center rounded-full">
                <Icon className="text-grafite size-6" />
              </span>
              <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
              <p className="text-muted-foreground group-hover:text-creme/70 mt-2 leading-relaxed">{text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title="Seu condomínio pode ser o próximo"
        description="Solicite um projeto personalizado sem custo e veja como ficaria a sua loja Tiquin."
      >
        <Link href="/contato" className={ctaVariants({ variant: "dark", size: "lg" })}>
          Solicitar projeto
        </Link>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaVariants({ variant: "outline", size: "lg" })}
        >
          Falar no WhatsApp
        </a>
      </CtaBanner>
    </>
  );
}
