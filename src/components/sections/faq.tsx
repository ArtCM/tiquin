"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

import { Tag } from "@/components/brand/tag";
import { ctaVariants } from "@/components/layout/cta-styles";
import { Reveal } from "@/components/motion/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { whatsappLink } from "@/config/site";

const faqs = [
  {
    q: "Quanto custa para o condomínio ter um Tiquin Market?",
    a: "Nada. O projeto, os equipamentos, a montagem, os produtos e a operação são por conta da Tiquin. O condomínio só disponibiliza o espaço e um ponto de energia.",
  },
  {
    q: "Qual o espaço mínimo necessário?",
    a: "Adaptamos o projeto ao espaço disponível. Em geral, a partir de 6 m² já é possível montar uma loja completa com geladeiras, gôndolas e totem de autoatendimento.",
  },
  {
    q: "Como os moradores pagam pelas compras?",
    a: "No totem de autoatendimento: o morador escaneia os produtos e paga com cartão de crédito, débito ou Pix. Todo o processo leva poucos segundos.",
  },
  {
    q: "E se houver perdas ou furtos?",
    a: "A responsabilidade é nossa. A loja conta com câmeras e controle de acesso, e eventuais perdas não geram nenhum custo para o condomínio.",
  },
  {
    q: "Com que frequência os produtos são repostos?",
    a: "Monitoramos o estoque em tempo real. A reposição acontece de forma programada, várias vezes por semana, conforme o consumo de cada loja.",
  },
  {
    q: "Os moradores podem pedir produtos específicos?",
    a: "Sim! Temos um canal direto pelo WhatsApp para sugestões. O mix é ajustado continuamente de acordo com as preferências do condomínio.",
  },
];

export function Faq() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Tag>Perguntas frequentes</Tag>
          <h2 className="mt-5 text-4xl leading-[1] font-extrabold uppercase sm:text-5xl lg:text-6xl">
            Ficou com alguma dúvida?
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            Separamos as perguntas mais comuns de síndicos e administradoras. Não encontrou a sua?
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaVariants({ variant: "dark" })}
            >
              Pergunte no WhatsApp
            </a>
            <Link href="/contato" className={ctaVariants({ variant: "outline" })}>
              Fale com a gente
            </Link>
          </div>
        </Reveal>

        <Accordion className="gap-3" defaultValue={[0]}>
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={i}
              className="bg-card data-open:bg-grafite data-open:text-creme rounded-[1.75rem] ring-1 ring-grafite/5 transition-colors duration-300 not-last:border-b-0"
            >
              <AccordionTrigger className="items-center gap-6 rounded-[1.75rem] px-6 py-5 text-lg font-bold hover:no-underline focus-visible:ring-amarelo/50 sm:px-8 sm:py-6 **:data-[slot=accordion-trigger-icon]:hidden">
                {item.q}
                <span className="bg-amarelo text-grafite flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-45">
                  <Plus className="size-5" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-creme/75 px-6 pb-6 text-base leading-relaxed sm:px-8 sm:pb-8">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
