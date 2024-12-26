import { z, ZodType } from "zod";

export type FormDataRegister = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  age: number;
  confirmPassword: string;
};

export const registerShcema: ZodType<FormDataRegister> = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must have at least 2 characters")
      .max(20, "First name must not exceed 20 characters")
      .trim(),
    lastName: z
      .string()
      .min(2, "Last name must have at least 2 characters")
      .max(20, "Last name must not exceed 20 characters")
      .trim(),
    username: z
      .string()
      .min(8, "Username must have at least 8 characters")
      .max(12, "Username must not exceed 12 characters"),
    email: z.string().email("Invalid email address!"),
    age: z
      .number()
      .min(18, "Age must be at least 18")
      .max(120, "Age must be under 120"),
    password: z
      .string()
      .min(8, "Password must have at least 8 characters")
      .max(12, "Password must not exceed 12 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must have at least 8 characters")
      .max(12, "Confirm password must not exceed 12 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
