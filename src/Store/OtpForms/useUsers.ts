import { TUserStore } from "@customTypes/Components/Molecules/AuthForms/AuthForms";
import { create } from "zustand";

export const useUser = create<TUserStore>()((set) => ({
  open: false,
  setOpen: (input) => set((state) => ({ ...state, open: input })),
}));
