import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";

import { CheeseHoles } from "@/components/brand/cheese-holes";
import { CircleImage } from "@/components/brand/circle-image";
import { Tag } from "@/components/brand/tag";
import { Reveal } from "@/components/motion/reveal";
import { images, siteConfig, whatsappLink } from "@/config/site";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Tiquin Market e solicite o projeto do seu mini mercado sem custo.",
};

export default function ContatoPage() {
  const { contact } = siteConfig;

  const channels = [
    { icon: Phone, label: "Celular / WhatsApp", value: contact.phoneDisplay, href: whatsappLink(), external: true },
    { icon: Mail, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Endereço", value: contact.address },
  ];

  return (
    <section className="px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl sm:px-6">
        <Reveal className="max-w-3xl">
          <Tag>Contato</Tag>
          <h1 className="mt-5 text-5xl leading-[0.95] font-extrabold uppercase sm:text-7xl">
            Vamos conversar?
          </h1>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            Preencha o formulário ou fale direto com a gente pelos canais abaixo. Respondemos rapidinho.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ icon: Icon, label, value, href, external }, i) => {
                const content = (
                  <>
                    <span className="bg-amarelo flex size-11 items-center justify-center rounded-full">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-muted-foreground mt-4 block text-xs font-bold tracking-[0.15em] uppercase">
                      {label}
                    </span>
                    <span className="mt-1 block font-bold break-words">{value}</span>
                  </>
                );
                return (
                  <Reveal as="li" key={label} delay={i * 80} className="last:sm:col-span-2">
                    {href ? (
                      <a
                        href={href}
                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="bg-card hover:ring-amarelo block h-full rounded-[1.75rem] p-5 ring-1 ring-grafite/5 transition-shadow hover:ring-2"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="bg-card h-full rounded-[1.75rem] p-5 ring-1 ring-grafite/5">{content}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>

            <Reveal className="bg-card rounded-[2.5rem] p-6 ring-1 ring-grafite/5 sm:p-10">
              <h2 className="text-2xl font-extrabold sm:text-3xl">Envie sua mensagem</h2>
              <p className="text-muted-foreground mt-2 mb-8">Todos os campos são obrigatórios, exceto a mensagem.</p>
              <ContactForm />
            </Reveal>
          </div>

          {/* Lateral: solicite o seu projeto sem custo */}
          <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
            <aside className="bg-grafite text-creme relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10">
              <CheeseHoles variant="corner" color="bg-amarelo/15" />
              <div className="relative">
                <h2 className="text-4xl leading-[0.95] font-extrabold uppercase sm:text-5xl">
                  Solicite o seu projeto <span className="text-amarelo">sem custo</span>
                </h2>
                <p className="text-creme/75 mt-6 leading-relaxed">
                  Fazemos um <strong className="text-creme">projeto personalizado</strong> para o seu
                  condomínio <strong className="text-creme">sem nenhum custo</strong>. Assim você entende
                  como seria a estrutura e os diferenciais que vão levar{" "}
                  <strong className="text-creme">comodidade, conforto e bem-estar</strong> para os moradores.
                </p>

                <div aria-hidden className="relative mx-auto mt-10 aspect-[5/4] w-full max-w-sm">
                  <CircleImage src={images.fridges} alt="" className="absolute top-0 left-0 w-[56%]" sizes="14rem" />
                  <CircleImage src={images.shelves} alt="" className="absolute top-[14%] right-0 w-[44%]" sizes="12rem" />
                  <CircleImage src={images.wine} alt="" className="absolute bottom-0 left-[30%] w-[40%]" sizes="10rem" />
                  <span className="bg-amarelo absolute right-[6%] bottom-[8%] size-8 rounded-full" />
                </div>

                <a
                  href={whatsappLink("Olá! Gostaria de solicitar um projeto sem custo para o meu condomínio.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 flex h-14 items-center justify-center gap-2 rounded-full bg-[#25d366] font-bold text-white transition-colors hover:bg-[#1ebe5b]"
                >
                  <FaWhatsapp className="size-5" />
                  Solicitar pelo WhatsApp
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
