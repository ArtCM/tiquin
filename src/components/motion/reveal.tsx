"use client";

import { cn } from "@/lib/utils";

import { useInView } from "./use-in-view";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Comp = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <Comp
      ref={ref as React.Ref<never>}
      data-visible={inView}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Comp>
  );
}
