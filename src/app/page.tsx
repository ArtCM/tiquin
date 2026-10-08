import { ArrowRight, ArrowUpRight, Building2, Dumbbell, Hotel, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CircleImage } from "@/components/brand/circle-image";
import { ctaVariants } from "@/components/layout/cta-styles";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Differentials } from "@/components/sections/differentials";
import { Faq } from "@/components/sections/faq";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeading } from "@/components/sections/section-heading";
import { Stats } from "@/components/sections/stats";
import { images, whatsappLink } from "@/config/site";

const segments = [
  { icon: Building2, label: "Condomínios" },
  { icon: Store, label: "Empresas" },
  { icon: Hotel, label: "Hotéis" },
  { icon: Dumbbell, label: "Academias" },
];

const reasons = [
  {
    title: "Comodidade 24h",
    text: "Aquele item que faltou no jantar está a poucos passos, a qualquer hora do dia ou da noite.",
  },
  {
    title: "Valoriza o condomínio",
    text: "Uma conveniência moderna que se torna diferencial na hora de comprar ou alugar um imóvel.",
  },
  {
    title: "Mais tempo e segurança",
    text: "Menos deslocamentos, menos trânsito e menos exposição na rua — especialmente à noite.",
  },
  {
    title: "Zero investimento",
    text: "O condomínio não paga nada: estrutura, produtos e operação ficam com a Tiquin.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        size="lg"
        tag="Mini mercado autônomo 24h"
        title={
          <>
            O mercado que <span className="text-amarelo">mora</span> no seu condomínio
          </>
        }
        description="Instalamos e operamos um mini mercado completo dentro do seu condomínio, sem nenhum custo. Comodidade, conforto e bem-estar a poucos passos de casa."
        image={images.aisle}
        imageAlt="Corredor de mini mercado com geladeiras e prateleiras abastecidas"
        footer={<Stats />}
      >
        <Link href="/contato" className={ctaVariants({ size: "lg" })}>
          Solicite seu projeto sem custo
          <ArrowUpRight className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
        </Link>
        <Link href="/como-funciona" className={ctaVariants({ variant: "glass", size: "lg" })}>
          Como funciona
        </Link>
      </PageHero>

      {/* 2 — O que fazemos */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              tag="O que fazemos"
              title="Mini mercados sob medida, prontos para usar"
              description={
                <>
                  Fazemos um <strong className="text-grafite">projeto personalizado</strong> para o
                  seu espaço, instalamos geladeiras, gôndolas e totem de autoatendimento, e cuidamos
                  de toda a operação: abastecimento, limpeza, manutenção e atendimento.
                </>
              }
            />
            <Reveal delay={150}>
              <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
                Cada condomínio tem suas preferências — e o mix de produtos se adapta a elas para
                entregar uma <strong className="text-grafite">experiência diferenciada</strong>.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {segments.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="bg-card flex items-center gap-2 rounded-full py-2 pr-5 pl-2 font-semibold ring-1 ring-grafite/5"
                  >
                    <span className="bg-amarelo flex size-8 items-center justify-center rounded-full">
                      <Icon className="size-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100} className="relative mx-auto aspect-square w-full max-w-xl">
            <CircleImage
              src={images.fridges}
              alt="Geladeiras com bebidas em mini mercado"
              className="absolute top-0 left-0 w-[58%]"
            />
            <CircleImage
              src={images.shelves}
              alt="Prateleiras com produtos de mercearia"
              className="absolute top-[22%] right-0 w-[46%]"
            />
            <CircleImage
              src={images.wine}
              alt="Garrafas de vinho"
              className="absolute bottom-0 left-[16%] w-[44%]"
            />
            <span className="bg-amarelo animate-float absolute right-[14%] bottom-[8%] size-16 rounded-full" />
            <span className="bg-grafite absolute top-[6%] right-[20%] size-6 rounded-full" />
          </Reveal>
        </div>
      </Section>

      {/* 3 — Por que ter um mercado Tiquin */}
      <Section className="pt-0 sm:pt-0">
        <SectionHeading
          tag="Por que ter um Tiquin"
          title={
            <>
              Por que ter um mercado <span className="bg-amarelo rounded-full px-3">Tiquin</span>
            </>
          }
          description="Mais do que um mercado: um serviço que melhora o dia a dia de quem mora e valoriza o patrimônio de todos."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal className="relative min-h-80 overflow-hidden rounded-[2.5rem] lg:row-span-2">
            <Image
              src={images.livingRoom}
              alt="Apartamento confortável"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="from-grafite/90 absolute inset-0 bg-linear-to-t to-transparent" />
            <p className="font-heading text-creme absolute inset-x-0 bottom-0 p-8 text-3xl leading-tight font-extrabold">
              Conforto de ter tudo <span className="text-amarelo">a poucos passos</span> de casa.
            </p>
          </Reveal>
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={i * 90}
              className="bg-card group hover:bg-grafite hover:text-creme flex flex-col rounded-[2.5rem] p-8 ring-1 ring-grafite/5 transition-colors duration-300"
            >
              <span className="bg-amarelo font-heading flex size-12 items-center justify-center rounded-full text-lg font-extrabold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-2xl font-extrabold">{reason.title}</h3>
              <p className="text-muted-foreground group-hover:text-creme/70 mt-2 leading-relaxed">
                {reason.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4 — Nossos diferenciais */}
      <Differentials />

      {/* 5 — Perguntas frequentes */}
      <Faq />

      <CtaBanner
        title="Solicite o seu projeto sem custo"
        description="Conte um pouco sobre o seu condomínio e nossa equipe prepara um projeto personalizado, sem compromisso."
      >
        <Link href="/contato" className={ctaVariants({ variant: "dark", size: "lg" })}>
          Solicitar projeto
          <ArrowRight className="transition-transform group-hover/cta:translate-x-1" />
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
