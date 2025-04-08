import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").nonempty("Name is required"),
  email: z.string().email("Invalid email format").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
});

export const signinSchema = z.object({
  email: z.string().email("Invalid email format").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
});

export const updateProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").nonempty("Name is required"),
});

export const changePasswordSchema = z.object({
  oldPassword: z.string().min(6, "Password must be at least 6 characters").nonempty("Old Password is required"),
  newPassword: z.string().min(6, "Password must be at least 6 characters").nonempty("New Password is required"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters").nonempty("Confirm Password is required"),
});
