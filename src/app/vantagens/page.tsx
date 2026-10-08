import {
  ArrowUpRight,
  BadgeCheck,
  Camera,
  Check,
  ClipboardList,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";

import { CheeseHoles } from "@/components/brand/cheese-holes";
import { CircleImage } from "@/components/brand/circle-image";
import { ctaVariants } from "@/components/layout/cta-styles";
import { ProjectCtaLink } from "@/components/layout/project-cta-link";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeading } from "@/components/sections/section-heading";
import { Stats } from "@/components/sections/stats";
import { images, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Vantagens para o condomínio",
  description:
    "Mini mercado no condomínio sem custo, sem preocupação com perdas e com reposição frequente. Veja as vantagens do Tiquin Market.",
};

const advantages = [
  "Nenhum custo de implantação ou operação",
  "Projeto personalizado para o espaço disponível",
  "Funcionamento 24 horas, 7 dias por semana",
  "Valorização do imóvel e do condomínio",
  "Sem funcionários para gerenciar",
  "Limpeza e manutenção por nossa conta",
  "Mix de produtos adaptado aos moradores",
  "Pagamento por cartão ou Pix no autoatendimento",
  "Atendimento direto aos moradores pelo WhatsApp",
];

const security = [
  { icon: Camera, title: "Câmeras 24h", text: "Monitoramento contínuo de toda a loja." },
  { icon: KeyRound, title: "Acesso controlado", text: "Entrada exclusiva para moradores cadastrados." },
  { icon: ClipboardList, title: "Inventário frequente", text: "Conferência do estoque a cada reposição." },
  { icon: ShieldCheck, title: "Risco é nosso", text: "Perdas e furtos não geram custo ao condomínio." },
];

export default function VantagensPage() {
  return (
    <>
      <PageHero
        tag="Vantagens para o condomínio"
        title={
          <>
            Um mercado completo, <span className="text-amarelo">zero</span> trabalho
          </>
        }
        description="Seu condomínio ganha um serviço valorizado pelos moradores sem investir nada, sem contratar ninguém e sem assumir riscos."
        image={images.building}
        imageAlt="Fachada de prédio residencial"
      >
        <ProjectCtaLink segment="condominio" className={ctaVariants({ size: "lg" })}>
          Solicite seu projeto sem custo
          <ArrowUpRight />
        </ProjectCtaLink>
      </PageHero>

      {/* Lista de vantagens */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            className="lg:sticky lg:top-32 lg:self-start"
            tag="Vantagens"
            title="Tudo o que o condomínio ganha"
            description="Síndicos e administradoras escolhem a Tiquin porque o mercado chega pronto e continua funcionando sem dar trabalho."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {advantages.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 60}
                className="bg-card flex items-start gap-4 rounded-[1.75rem] p-5 ring-1 ring-grafite/5"
              >
                <span className="bg-amarelo flex size-9 shrink-0 items-center justify-center rounded-full">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span className="pt-1.5 font-semibold">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Dados */}
      <Section className="pt-0 sm:pt-0">
        <div className="bg-grafite text-creme relative overflow-hidden rounded-[2.5rem] px-6 py-16 sm:px-12 sm:py-20">
          <CheeseHoles variant="corner" color="bg-amarelo/15" />
          <div className="relative">
            <SectionHeading
              tone="dark"
              tag="Em números"
              title={
                <>
                  Resultados que <span className="text-amarelo">falam</span> por si
                </>
              }
            />
            <div className="mt-12">
              <Stats />
            </div>
          </div>
        </div>
      </Section>

      {/* Zero preocupações com perdas e furtos */}
      <Section className="pt-0 sm:pt-0">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <CircleImage src={images.aisleBright} alt="Loja bem iluminada e monitorada" />
            <div className="bg-amarelo absolute -right-2 bottom-6 flex items-center gap-3 rounded-full py-3 pr-6 pl-3 shadow-xl sm:-right-8">
              <span className="bg-grafite text-amarelo flex size-11 items-center justify-center rounded-full">
                <BadgeCheck className="size-6" />
              </span>
              <span className="font-heading text-lg leading-tight font-extrabold">
                R$ 0 de prejuízo
                <span className="block text-sm font-semibold">para o condomínio</span>
              </span>
            </div>
            <span className="bg-grafite absolute top-4 left-2 size-10 rounded-full" />
          </Reveal>

          <div>
            <SectionHeading
              tag="Segurança"
              title="Zero preocupações com perdas e furtos"
              description="A Tiquin assume toda a responsabilidade pela loja. Investimos em tecnologia e processos para que a operação seja segura — e, se algo acontecer, o prejuízo é nosso."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {security.map(({ icon: Icon, title, text }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 80}
                  className="bg-card rounded-[1.75rem] p-5 ring-1 ring-grafite/5"
                >
                  <Icon className="text-amarelo-dark size-6" />
                  <h3 className="mt-3 font-extrabold">{title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contato direto para solicitar produtos */}
      <Section className="pt-0 sm:pt-0">
        <Reveal className="bg-amarelo relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-14 sm:py-20">
          <CheeseHoles color="bg-amarelo-dark/50" />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl leading-[1] font-extrabold uppercase sm:text-5xl lg:text-6xl">
                Sentiu falta de algum produto?
              </h2>
              <p className="text-grafite/80 mt-5 text-lg leading-relaxed">
                Os moradores têm um canal direto com a Tiquin para pedir produtos, dar sugestões e
                tirar dúvidas. O mix evolui junto com o condomínio.
              </p>
              <a
                href={whatsappLink("Olá! Gostaria de sugerir um produto para o Tiquin do meu condomínio.")}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaVariants({ variant: "dark", size: "lg" })} mt-8`}
              >
                <FaWhatsapp />
                Solicitar um produto
              </a>
            </div>

            {/* Conversa ilustrativa */}
            <div aria-hidden className="bg-creme mx-auto w-full max-w-sm rounded-[2rem] p-5 shadow-2xl shadow-grafite/20">
              <div className="flex items-center gap-3 border-b border-grafite/10 pb-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#25d366] text-white">
                  <FaWhatsapp className="size-5" />
                </span>
                <span>
                  <span className="block font-bold">Tiquin Market</span>
                  <span className="text-muted-foreground block text-xs">online</span>
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <p className="bg-grafite text-creme max-w-[80%] self-end rounded-2xl rounded-br-md px-4 py-2.5">
                  Oi! Vocês podem trazer leite sem lactose? 🥛
                </p>
                <p className="bg-card max-w-[80%] rounded-2xl rounded-bl-md px-4 py-2.5 ring-1 ring-grafite/5">
                  Claro! Já incluímos na próxima reposição 😉
                </p>
                <p className="bg-grafite text-creme max-w-[80%] self-end rounded-2xl rounded-br-md px-4 py-2.5">
                  Perfeito, obrigado!
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
