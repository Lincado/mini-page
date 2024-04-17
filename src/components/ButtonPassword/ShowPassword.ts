import { create } from "zustand";

type State = {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
};

export const UseShowPassword = create<State>((set) => ({
  showPassword: false,
  togglePasswordVisibility: () =>
    set((state) => ({ showPassword: !state.showPassword })),
}));
