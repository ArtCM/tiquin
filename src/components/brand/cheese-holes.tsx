import { cn } from "@/lib/utils";

type Hole = { top: string; left: string; size: string; opacity?: number };

const presets: Record<string, Hole[]> = {
  scattered: [
    { top: "8%", left: "6%", size: "5rem", opacity: 0.5 },
    { top: "62%", left: "2%", size: "2.5rem" },
    { top: "18%", left: "88%", size: "3.5rem" },
    { top: "74%", left: "82%", size: "7rem", opacity: 0.4 },
    { top: "45%", left: "48%", size: "1.5rem", opacity: 0.6 },
  ],
  corner: [
    { top: "-6%", left: "78%", size: "12rem", opacity: 0.35 },
    { top: "30%", left: "92%", size: "4rem", opacity: 0.6 },
    { top: "70%", left: "86%", size: "2rem" },
  ],
};

/** Círculos decorativos que fazem referência aos furos do queijo do logo. */
export function CheeseHoles({
  variant = "scattered",
  className,
  color = "bg-amarelo/25",
}: {
  variant?: keyof typeof presets;
  className?: string;
  color?: string;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {presets[variant].map((h, i) => (
        <span
          key={i}
          className={cn("absolute rounded-full", color)}
          style={{ top: h.top, left: h.left, width: h.size, height: h.size, opacity: h.opacity ?? 1 }}
        />
      ))}
    </div>
  );
}
