import { z } from "zod";

export type FormDataLogin = {
  username: string;
  password: string;
  email: string;
};

export const loginSchema = z.object({
  username: z
    .string()
    .min(8, "Username must have at least 8 characters")
    .max(20, "Username must not exceed 20 characters"),
  email: z.string().email("Invalid email address!"),
  password: z
    .string()
    .min(8, "Password must have at least 8 characters")
    .max(20, "Password must not exceed 20 characters"),
});
