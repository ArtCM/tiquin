"use client";

import { useEffect, useState } from "react";

import { useInView } from "@/components/motion/use-in-view";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Visita técnica e projeto",
    text: "Avaliamos o espaço, entendemos o perfil dos moradores e entregamos um projeto personalizado sem custo.",
  },
  {
    title: "Instalação completa",
    text: "Montamos mobiliário, geladeiras, câmeras e totem de autoatendimento. O condomínio não se preocupa com nada.",
  },
  {
    title: "Abastecimento inicial",
    text: "A loja é inaugurada com um mix pensado para o condomínio: mercearia, bebidas, congelados, higiene e mais.",
  },
  {
    title: "Monitoramento em tempo real",
    text: "Acompanhamos vendas e estoque pelo sistema, identificando o que sai mais e o que precisa entrar.",
  },
  {
    title: "Reposição frequente",
    text: "Nossa equipe repõe os produtos em rotas programadas, garantindo prateleiras sempre cheias e itens dentro da validade.",
  },
  {
    title: "Manutenção e suporte",
    text: "Limpeza, manutenção dos equipamentos e atendimento direto aos moradores pelo WhatsApp.",
  },
];

const STEP_INTERVAL = 450;

export function LogisticsTimeline() {
  const [ref, inView] = useInView<HTMLOListElement>(0.15);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = setInterval(() => {
      setActive((n) => {
        if (n >= steps.length) {
          clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, reduced ? 0 : STEP_INTERVAL);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <ol ref={ref} className="relative mx-auto mt-16 max-w-5xl">
      {steps.map((step, i) => {
        const isOn = i < active;
        const right = i % 2 === 1;
        const isLast = i === steps.length - 1;
        return (
          <li
            key={step.title}
            className="relative grid grid-cols-[3.5rem_1fr] gap-5 pb-10 last:pb-0 lg:grid-cols-[1fr_3.5rem_1fr] lg:gap-8"
          >
            {!isLast && (
              <span
                aria-hidden
                className="bg-grafite/10 absolute top-7 left-7 h-full w-1 -translate-x-1/2 overflow-hidden rounded-full lg:left-1/2"
              >
                <span
                  className={cn(
                    "bg-amarelo block h-full origin-top transition-transform duration-500 ease-out",
                    i + 1 < active ? "scale-y-100" : "scale-y-0"
                  )}
                />
              </span>
            )}
            <span
              className={cn(
                "font-heading relative z-10 col-start-1 row-start-1 flex size-14 items-center justify-center rounded-full text-lg font-extrabold transition-all duration-500 lg:col-start-2",
                isOn
                  ? "bg-amarelo text-grafite scale-100 shadow-lg shadow-amarelo/40"
                  : "bg-creme text-grafite/30 ring-grafite/10 scale-75 ring-2"
              )}
            >
              {i + 1}
            </span>
            <div
              className={cn(
                "bg-card col-start-2 row-start-1 rounded-[2rem] p-6 ring-1 ring-grafite/5 transition-all duration-700 ease-out sm:p-8",
                right ? "lg:col-start-3" : "lg:col-start-1 lg:text-right",
                isOn ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              <h3 className="text-xl font-extrabold sm:text-2xl">{step.title}</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">{step.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
