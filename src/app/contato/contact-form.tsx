"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { ctaVariants } from "@/components/layout/cta-styles";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, segments, type ContactInput } from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";
import { useSiteStore } from "@/stores/site-store";

import { submitContact } from "./actions";

const fieldClass =
  "bg-creme h-13 rounded-2xl border-transparent px-5 text-base ring-1 ring-grafite/10 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-amarelo md:text-base";

function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [sent, setSent] = useState(false);
  const preferredSegment = useSiteStore((s) => s.preferredSegment);
  const setPreferredSegment = useSiteStore((s) => s.setPreferredSegment);

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });
  const { register, handleSubmit, control, setValue, reset, formState } = form;
  const { errors } = formState;

  // Pré-seleciona o segmento quando o usuário veio de um CTA específico
  useEffect(() => {
    if (preferredSegment) {
      setValue("segment", preferredSegment);
      setPreferredSegment(null);
    }
  }, [preferredSegment, setValue, setPreferredSegment]);

  const onSubmit = (data: ContactInput) =>
    startTransition(async () => {
      const result = await submitContact(data);
      if (result.ok) {
        setSent(true);
        reset();
        toast.success("Mensagem enviada! Em breve entraremos em contato.");
      } else {
        toast.error(result.error);
      }
    });

  if (sent) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <span className="bg-amarelo flex size-20 items-center justify-center rounded-full">
          <CheckCircle2 className="size-10" />
        </span>
        <h3 className="mt-6 text-3xl font-extrabold">Recebemos sua mensagem!</h3>
        <p className="text-muted-foreground mt-3 max-w-sm leading-relaxed">
          Nossa equipe vai analisar as informações e entrar em contato em até 1 dia útil.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className={cn(ctaVariants({ variant: "outline" }), "mt-8")}
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Nome" htmlFor="name" error={errors.name?.message} className="sm:col-span-2">
        <Input
          id="name"
          autoComplete="name"
          placeholder="Seu nome completo"
          aria-invalid={!!errors.name}
          className={fieldClass}
          {...register("name")}
        />
      </Field>

      <Field label="E-mail" htmlFor="email" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="voce@email.com"
          aria-invalid={!!errors.email}
          className={fieldClass}
          {...register("email")}
        />
      </Field>

      <Field label="Telefone" htmlFor="phone" error={errors.phone?.message}>
        <Input
          id="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(11) 99999-9999"
          aria-invalid={!!errors.phone}
          className={fieldClass}
          {...register("phone", {
            onChange: (e) => setValue("phone", formatPhone(e.target.value)),
          })}
        />
      </Field>

      <Field label="Segmento" htmlFor="segment" error={errors.segment?.message} className="sm:col-span-2">
        <Controller
          control={control}
          name="segment"
          render={({ field }) => (
            <Select
              items={segments}
              value={field.value ?? null}
              onValueChange={(v) => field.onChange(v ?? undefined)}
            >
              <SelectTrigger
                id="segment"
                aria-invalid={!!errors.segment}
                onBlur={field.onBlur}
                className={cn(fieldClass, "w-full data-[size=default]:h-13 pr-4")}
              >
                <SelectValue placeholder="Selecione o segmento" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl p-1">
                {segments.map((s) => (
                  <SelectItem key={s.value} value={s.value} className="rounded-xl py-2.5 pl-3 text-base">
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </Field>

      <Field label="Mensagem (opcional)" htmlFor="message" error={errors.message?.message} className="sm:col-span-2">
        <Textarea
          id="message"
          rows={4}
          placeholder="Conte um pouco sobre o seu espaço ou tire suas dúvidas"
          className={cn(fieldClass, "h-auto min-h-32 py-4")}
          {...register("message")}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground text-sm">
          Seus dados são usados apenas para retornarmos o contato.
        </p>
        <button type="submit" disabled={pending} className={cn(ctaVariants({ size: "lg" }), "disabled:opacity-70")}>
          {pending ? <Loader2 className="animate-spin" /> : <Send />}
          {pending ? "Enviando..." : "Enviar mensagem"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={htmlFor} className="font-bold">
        {label}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-destructive text-sm font-semibold">
          {error}
        </p>
      )}
    </div>
  );
}
