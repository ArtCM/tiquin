import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { stats } from "@/config/site";
import { cn } from "@/lib/utils";

/** Bloco de dados (números da operação). */
export function Stats({ tone = "glass" }: { tone?: "glass" | "light" | "dark" }) {
  return (
    <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={i * 100}
          className={cn(
            "flex flex-col rounded-[1.75rem] p-5 sm:p-7",
            tone === "glass" && "bg-white/10 ring-1 ring-white/15 backdrop-blur-md",
            tone === "light" && "bg-card ring-1 ring-grafite/5",
            tone === "dark" && "bg-grafite text-creme"
          )}
        >
          <dt
            className={cn(
              "text-sm font-semibold",
              tone === "light" ? "text-muted-foreground" : "text-creme/70"
            )}
          >
            {stat.label}
          </dt>
          <dd className="font-heading order-first mb-1 text-4xl font-extrabold sm:text-5xl">
            <span className={tone === "light" ? "text-grafite" : "text-amarelo"}>
              {stat.text ?? <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />}
            </span>
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
