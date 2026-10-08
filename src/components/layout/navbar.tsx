"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { useSiteStore } from "@/stores/site-store";

import { ctaVariants } from "./cta-styles";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const open = useSiteStore((s) => s.mobileNavOpen);
  const setOpen = useSiteStore((s) => s.setMobileNavOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-[calc(env(safe-area-inset-top,0px)+0.75rem)]">
      <nav
        aria-label="Principal"
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 rounded-full pr-2 pl-6 ring-1 ring-grafite/5 transition-all duration-300",
          scrolled ? "bg-creme/90 shadow-lg shadow-grafite/10 backdrop-blur-md" : "bg-creme/95"
        )}
      >
        <Link href="/" aria-label="Tiquin Market — início" className="shrink-0">
          <Logo priority className="h-9" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive(link.href)
                    ? "bg-grafite text-creme"
                    : "text-grafite/75 hover:bg-grafite/5 hover:text-grafite"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/contato" className={cn(ctaVariants({ size: "sm" }), "hidden sm:inline-flex")}>
            Solicite seu projeto
            <ArrowUpRight className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="bg-grafite text-creme flex size-12 items-center justify-center rounded-full lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-creme w-[88%] p-6">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo className="mb-6 h-10 self-start" />
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "font-heading flex items-center justify-between rounded-2xl px-4 py-3 text-2xl font-bold",
                        isActive(link.href) ? "bg-grafite text-creme" : "hover:bg-grafite/5"
                      )}
                    >
                      {link.label}
                      {isActive(link.href) && <span className="bg-amarelo size-2.5 rounded-full" />}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <Link href="/contato" onClick={() => setOpen(false)} className={ctaVariants({ size: "lg" })}>
                  Solicite seu projeto sem custo
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaVariants({ variant: "whatsapp", size: "lg" })}
                >
                  Falar no WhatsApp
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
