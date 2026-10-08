import { create } from "zustand";

import type { Segment } from "@/lib/schemas/contact";

type SiteState = {
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  /** Segmento pré-selecionado no formulário quando o usuário vem de um CTA específico */
  preferredSegment: Segment | null;
  setPreferredSegment: (segment: Segment | null) => void;
};

export const useSiteStore = create<SiteState>((set) => ({
  mobileNavOpen: false,
  setMobileNavOpen: (mobileNavOpen) => set({ mobileNavOpen }),
  preferredSegment: null,
  setPreferredSegment: (preferredSegment) => set({ preferredSegment }),
}));
