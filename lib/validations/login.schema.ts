import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .refine(
      (value) =>
        value.includes("@")
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          : true,
      {
        message: "Please enter a valid email address.",
      }
    ),

  password: z
    .string()
    .min(1, "Password is required.")
    .min(6, "Password must be at least 6 characters."),
});

export type LoginSchema = z.infer<typeof loginSchema>;