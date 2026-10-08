import { cn } from "@/lib/utils";

/** Etiqueta de seção (pill) com o "furo" amarelo. */
export function Tag({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "glass";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase",
        tone === "light" && "bg-grafite/5 text-grafite ring-grafite/10 ring-1",
        tone === "dark" && "bg-grafite text-creme",
        tone === "glass" && "bg-white/10 text-creme ring-1 ring-white/20 backdrop-blur",
        className
      )}
    >
      <span className="bg-amarelo size-2 rounded-full" />
      {children}
    </span>
  );
}
