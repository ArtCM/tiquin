import { cva, type VariantProps } from "class-variance-authority";

/** Botões arredondados da marca — usados em <Link> e <a>. */
export const ctaVariants = cva(
  "group/cta inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:ring-amarelo/50 active:translate-y-px [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-amarelo text-grafite hover:bg-amarelo-dark shadow-lg shadow-amarelo/25",
        dark: "bg-grafite text-creme hover:bg-grafite-soft",
        outline:
          "ring-2 ring-inset ring-grafite/15 text-grafite hover:bg-grafite hover:text-creme hover:ring-grafite",
        glass: "bg-white/10 text-creme ring-1 ring-inset ring-white/25 backdrop-blur hover:bg-white/20",
        whatsapp: "bg-[#25d366] text-white hover:bg-[#1ebe5b] shadow-lg shadow-[#25d366]/25",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export type CtaVariants = VariantProps<typeof ctaVariants>;
