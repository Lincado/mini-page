import { create } from "zustand";

type IsLoggedIn = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const UseIsLoggedIn = create<IsLoggedIn>((set) => ({
  isAuthenticated: false,
  login: () => set(() => ({ isAuthenticated: true })),
  logout: () => set(() => ({ isAuthenticated: false })),
}));
