import Image from "next/image";

import { cn } from "@/lib/utils";

const logos = {
  // Logo escuro, sem slogan — para fundos claros
  dark: { src: "/Tiquin1.png", width: 1357, height: 604 },
  // Logo claro, com slogan "Tem um tiquin de tudo." — para fundos escuros
  light: { src: "/Tiquin2.png", width: 1357, height: 1096 },
} as const;

export function Logo({
  className,
  tone = "dark",
  priority,
}: {
  className?: string;
  tone?: keyof typeof logos;
  priority?: boolean;
}) {
  const logo = logos[tone];

  return (
    <Image
      src={logo.src}
      width={logo.width}
      height={logo.height}
      alt="Tiquin Market"
      preload={priority}
      className={cn("h-10 w-auto", className)}
    />
  );
}
