import { z } from "zod";
export const schemaRegister = z
  .object({
    name: z.string().min(3, "Insira um nome maior que 3 caractere"),
    email: z.string().email("insira um email válido"),
    password: z.string().min(8, "Insira uma senha maior que 8 caracteres"),
    confirmPassword: z
      .string()
      .min(8, "Insira uma senha maior que 8 caracteres"),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      path: ["confirmPassword"],
      message: "Senha não são iguais",
    }
  );
