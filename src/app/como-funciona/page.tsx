import { ArrowRight, CreditCard, DoorOpen, ScanLine, ShoppingBasket } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { ctaVariants } from "@/components/layout/cta-styles";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Differentials } from "@/components/sections/differentials";
import { LogisticsTimeline } from "@/components/sections/logistics-timeline";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeading } from "@/components/sections/section-heading";
import { images, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Entenda como o Tiquin Market funciona: do projeto sem custo à reposição frequente dos produtos no seu condomínio.",
};

const flow = [
  { icon: DoorOpen, title: "Entre", text: "Acesso exclusivo para moradores" },
  { icon: ShoppingBasket, title: "Escolha", text: "Produtos para o dia a dia" },
  { icon: ScanLine, title: "Escaneie", text: "No totem de autoatendimento" },
  { icon: CreditCard, title: "Pague", text: "Cartão ou Pix, em segundos" },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <PageHero
        tag="Como funciona"
        title={
          <>
            Simples para o condomínio, <span className="text-amarelo">prático</span> para o morador
          </>
        }
        description="O condomínio cede o espaço e a Tiquin cuida de todo o resto. O morador desce, escolhe, paga no totem e volta para casa — a qualquer hora."
        image={images.fridges}
        imageAlt="Geladeiras iluminadas de um mini mercado"
        footer={
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {flow.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 100}
                className="flex items-center gap-4 rounded-[1.75rem] bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-md sm:p-5"
              >
                <span className="bg-amarelo text-grafite flex size-12 shrink-0 items-center justify-center rounded-full">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block font-bold">{title}</span>
                  <span className="text-creme/70 block text-sm">{text}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        }
      />

      <Section>
        <SectionHeading
          align="center"
          tag="Nossa logística"
          title="Do projeto à prateleira cheia"
          description="Uma operação pensada para que nada falte — e para que o condomínio não precise se preocupar com nada."
        />
        <LogisticsTimeline />
      </Section>

      <Differentials />

      <CtaBanner
        title="Vamos levar um Tiquin para o seu condomínio?"
        description="Fale com nosso time pelo WhatsApp ou conheça algumas das lojas que já estão funcionando."
      >
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaVariants({ variant: "dark", size: "lg" })}
        >
          <FaWhatsapp />
          Falar no WhatsApp
        </a>
        <Link href="/nossas-lojas" className={ctaVariants({ variant: "outline", size: "lg" })}>
          Conheça nossas lojas
          <ArrowRight className="transition-transform group-hover/cta:translate-x-1" />
        </Link>
      </CtaBanner>
    </>
  );
}
