import { CheeseHoles } from "@/components/brand/cheese-holes";
import { Reveal } from "@/components/motion/reveal";

import { Section } from "./section-heading";

/** Faixa amarela de CTA no fim das páginas. */
export function CtaBanner({
  title,
  description,
  children,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Section>
      <Reveal className="bg-amarelo text-grafite relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-14 sm:py-20">
        <CheeseHoles color="bg-amarelo-dark/50" />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl leading-[1] font-extrabold text-balance uppercase sm:text-6xl">{title}</h2>
            <p className="text-grafite/80 mt-5 text-lg leading-relaxed">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">{children}</div>
        </div>
      </Reveal>
    </Section>
  );
}
