import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().min(8, "Insira uma senha maior que 8 caracteres"),
});
