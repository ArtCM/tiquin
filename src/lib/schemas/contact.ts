import { z } from "zod";

export const segments = [
  { value: "condominio", label: "Condomínio" },
  { value: "empresa", label: "Empresa" },
  { value: "hotel", label: "Hotel" },
  { value: "academia", label: "Academia" },
  { value: "outro", label: "Outro" },
] as const;

export type Segment = (typeof segments)[number]["value"];

const segmentValues = segments.map((s) => s.value) as [Segment, ...Segment[]];

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome"),
  email: z.email("Informe um e-mail válido").trim(),
  phone: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe um telefone com DDD"),
  segment: z.enum(segmentValues, { error: "Selecione um segmento" }),
  message: z.string().trim().max(1000, "Máximo de 1000 caracteres").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
