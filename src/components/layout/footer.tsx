import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { CheeseHoles } from "@/components/brand/cheese-holes";
import { Logo } from "@/components/brand/logo";
import { navLinks, siteConfig, whatsappLink } from "@/config/site";

import { CurrentYear } from "./current-year";

const socials = [
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: siteConfig.social.instagram, label: "Instagram", icon: FaInstagram },
  { href: whatsappLink(), label: "WhatsApp", icon: FaWhatsapp },
];

export function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="bg-grafite text-creme relative overflow-hidden rounded-t-[2.5rem] px-4 pt-16 pb-[calc(env(safe-area-inset-bottom,0px)+2rem)] sm:px-8 lg:px-12">
      <CheeseHoles variant="corner" color="bg-amarelo/15" />
      <div className="relative">
        <div className="relative grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="light" className="-ml-2 h-40 sm:h-44" />
            <p className="text-creme/70 mt-4 leading-relaxed">
              O mini mercado autônomo que leva comodidade, conforto e bem-estar para dentro do seu
              condomínio. Aberto 24h, sem custo para o condomínio.
            </p>
            <ul className="mt-8 flex gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:bg-amarelo hover:text-grafite flex size-12 items-center justify-center rounded-full bg-white/10 transition-colors"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="text-amarelo text-xs font-bold tracking-[0.2em] uppercase">Navegação</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-creme/80 hover:text-amarelo transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-amarelo text-xs font-bold tracking-[0.2em] uppercase">Contato</h2>
            <ul className="text-creme/80 mt-5 space-y-4">
              <li className="flex gap-3">
                <Phone className="text-amarelo mt-1 size-4 shrink-0" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-amarelo">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-amarelo mt-1 size-4 shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-amarelo break-all">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-amarelo mt-1 size-4 shrink-0" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-creme/50 relative mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm sm:flex-row sm:justify-between">
          <p>
            © <CurrentYear /> Tiquin Market. Todos os direitos reservados.
          </p>
          <p>Mercado autônomo 24h para condomínios.</p>
        </div>
      </div>
    </footer>
  );
}
