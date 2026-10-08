import { FaWhatsapp } from "react-icons/fa";

import { whatsappLink } from "@/config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed right-5 bottom-[calc(env(safe-area-inset-bottom,0px)+1.25rem)] z-40 flex items-center gap-3"
    >
      <span className="bg-grafite text-creme pointer-events-none hidden translate-x-2 rounded-full px-4 py-2 text-sm font-semibold opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Fale com a gente
      </span>
      <span className="relative flex size-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-[#25d366]/30 transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-25 [animation-duration:2.5s]" />
        <FaWhatsapp className="relative size-8" />
      </span>
    </a>
  );
}
