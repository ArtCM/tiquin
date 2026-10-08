import Image from "next/image";

import { cn } from "@/lib/utils";

/** Foto recortada em círculo, como na apresentação da marca. */
export function CircleImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 22rem, 60vw",
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative aspect-square overflow-hidden rounded-full shadow-xl shadow-grafite/10", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} preload={priority} className="object-cover" />
    </div>
  );
}
