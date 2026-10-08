import { Tag } from "@/components/brand/tag";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  tag: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Tag tone={tone === "dark" ? "glass" : "light"}>{tag}</Tag>
      <h2
        className={cn(
          "mt-5 text-4xl leading-[1] font-extrabold text-balance uppercase sm:text-5xl lg:text-6xl",
          tone === "dark" ? "text-creme" : "text-grafite"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            tone === "dark" ? "text-creme/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

/** Wrapper padrão de seção com espaçamento e largura máxima. */
export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-4 py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-7xl sm:px-6">{children}</div>
    </section>
  );
}
