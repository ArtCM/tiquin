# Tiquin Market — site institucional

Next.js 16 (App Router, Cache Components) · React 19 · Tailwind CSS 4 · shadcn/ui (Base UI) · Zustand · Zod · React Hook Form

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `src/app/` | Páginas: `/`, `/como-funciona`, `/vantagens`, `/nossas-lojas`, `/contato` |
| `src/app/contato/actions.ts` | Server action do formulário (ponto de integração com o Supabase) |
| `src/config/site.ts` | Contatos, redes sociais, WhatsApp, números da operação e fotos |
| `src/components/brand/` | Logo, tags, imagens circulares e "furos de queijo" decorativos |
| `src/components/sections/` | Seções reutilizáveis (header padrão, FAQ, diferenciais, CTA, logística…) |
| `src/components/ui/` | Componentes shadcn |
| `src/lib/schemas/contact.ts` | Schema Zod do formulário |
| `src/stores/site-store.ts` | Store Zustand (menu mobile, segmento pré-selecionado no contato) |

Cores da marca (Tailwind): `grafite` `#1f1f1f`, `amarelo` `#f2b00f`, `creme` `#f7f0e8`.

## Pendências

- Substituir valores marcados com `TODO` em `src/config/site.ts` (WhatsApp, e-mail, endereço, redes, números).
- Trocar as fotos provisórias (Unsplash) por fotos reais das lojas em `public/images`.
- Conectar `submitContact` ao Supabase (tabela sugerida: `contact_messages`).
