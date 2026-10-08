import Image from "next/image";

import { CheeseHoles } from "@/components/brand/cheese-holes";
import { Tag } from "@/components/brand/tag";
import { cn } from "@/lib/utils";

/**
 * Header padrão das páginas (modelo da home): foto de fundo, tag, título, texto e CTAs.
 * `size="lg"` é usado na home.
 */
export function PageHero({
  tag,
  title,
  description,
  image,
  imageAlt,
  children,
  footer,
  size = "md",
}: {
  tag: string;
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <section>
      <div
        className={cn(
          "bg-grafite text-creme relative flex w-full flex-col justify-end overflow-hidden rounded-b-[2.5rem]",
          size === "lg" ? "min-h-svh" : "min-h-[min(75svh,44rem)]"
        )}
      >
        <Image src={image} alt={imageAlt} fill preload sizes="100vw" className="object-cover" />
        <div className="from-grafite via-grafite/75 to-grafite/20 absolute inset-0 bg-linear-to-t" />
        <div className="from-grafite/70 absolute inset-0 bg-linear-to-r to-transparent" />
        <CheeseHoles variant="corner" color="bg-amarelo/30" className="opacity-60" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-10 sm:px-10 sm:pb-14">
          <div className="max-w-3xl">
            <Tag tone="glass">{tag}</Tag>
            <h1
              className={cn(
                "mt-6 font-extrabold text-balance uppercase",
                size === "lg"
                  ? "text-[2.75rem] leading-[0.95] sm:text-7xl lg:text-8xl"
                  : "text-4xl leading-[0.95] sm:text-6xl lg:text-7xl"
              )}
            >
              {title}
            </h1>
            <p className="text-creme/80 mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
              {description}
            </p>
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
          {footer && <div className="mt-12">{footer}</div>}
        </div>
      </div>
    </section>
  );
}
