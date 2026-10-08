"use server";

import { z } from "zod";

import { contactSchema, type ContactInput } from "@/lib/schemas/contact";

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[] | undefined> };

export async function submitContact(input: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      error: "Verifique os campos do formulário.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
    };
  }

  // TODO: salvar no Supabase, ex.:
  // await supabase.from("contact_messages").insert(parsed.data)
  console.info("[contato] nova mensagem", parsed.data);

  return { ok: true };
}
