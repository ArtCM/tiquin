"use client";

import Link from "next/link";

import type { Segment } from "@/lib/schemas/contact";
import { useSiteStore } from "@/stores/site-store";

/** Link para /contato que pré-seleciona o segmento no formulário. */
export function ProjectCtaLink({
  segment,
  className,
  children,
}: {
  segment: Segment;
  className?: string;
  children: React.ReactNode;
}) {
  const setPreferredSegment = useSiteStore((s) => s.setPreferredSegment);

  return (
    <Link href="/contato" className={className} onClick={() => setPreferredSegment(segment)}>
      {children}
    </Link>
  );
}
