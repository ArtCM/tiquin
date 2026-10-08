import { Clock, HandCoins, PackageCheck, Ruler, ShieldCheck, Smartphone } from "lucide-react";

import { CheeseHoles } from "@/components/brand/cheese-holes";
import { Reveal } from "@/components/motion/reveal";

import { Section, SectionHeading } from "./section-heading";

const items = [
  {
    icon: HandCoins,
    title: "Sem custo para o condomínio",
    text: "Projeto, montagem, equipamentos e operação por nossa conta. O condomínio só cede o espaço.",
  },
  {
    icon: Ruler,
    title: "Projeto personalizado",
    text: "Cada loja é desenhada para o espaço e o perfil dos moradores — do mobiliário ao mix de produtos.",
  },
  {
    icon: Clock,
    title: "Aberto 24 horas",
    text: "Compras a qualquer hora, sem filas e sem sair de casa. Conveniência de verdade.",
  },
  {
    icon: Smartphone,
    title: "Autoatendimento simples",
    text: "Escolha, escaneie e pague com cartão ou Pix direto no totem, em poucos segundos.",
  },
  {
    icon: PackageCheck,
    title: "Reposição inteligente",
    text: "Monitoramos o estoque em tempo real e repomos antes que o produto falte.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança monitorada",
    text: "Câmeras e controle de acesso integrados. Perdas são responsabilidade da Tiquin.",
  },
];

export function Differentials() {
  return (
    <Section className="py-4 sm:py-4">
      <div className="bg-grafite text-creme relative overflow-hidden rounded-[2.5rem] px-6 py-16 sm:px-12 sm:py-24">
        <CheeseHoles color="bg-amarelo/15" />
        <div className="relative">
          <SectionHeading
            tone="dark"
            tag="Nossos diferenciais"
            title={
              <>
                Feito para <span className="text-amarelo">facilitar</span> a rotina
              </>
            }
            description="Tudo o que o condomínio precisa para ter um mercado completo, sem trabalho e sem investimento."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 80}
                className="group hover:bg-amarelo hover:text-grafite rounded-[2rem] bg-white/5 p-7 ring-1 ring-white/10 transition-colors duration-300"
              >
                <span className="bg-amarelo text-grafite group-hover:bg-grafite group-hover:text-amarelo flex size-14 items-center justify-center rounded-full transition-colors">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="text-creme/70 group-hover:text-grafite/80 mt-2 leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
