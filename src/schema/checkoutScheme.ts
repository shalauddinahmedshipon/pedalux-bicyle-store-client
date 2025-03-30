import { z } from "zod";

export const shippingSchema = z.object({
  phoneNumber:z.string().min(1, "Phone number is required"),
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z
    .string()
    .min(1, "ZIP Code is required")
    .regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP Code format"), // US ZIP Code format (5 digits or 5-4)
  country: z.string().min(1, "Country is required"),
});
