import { create } from "zustand";

interface DataUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface User {
  dataUser: DataUser;
  setDataUser: (data: DataUser) => void;
}

const useDataUser = create<User>((set) => ({
  dataUser: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  setDataUser: (data) =>
    set((state) => ({ dataUser: { ...state.dataUser, ...data } })),
}));

export default useDataUser;
