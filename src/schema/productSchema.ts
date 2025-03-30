import { z } from "zod";

export const categorySchema = z.object({
  name:z.string().min(1, "Category name is required"),
});

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  category:z.string().min(1, "Category is required"),
  price: z.number().min(0, "Price must be a positive number"),
  stock: z.number().int().min(0, "Stock cannot be negative"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
  imageUrl: z.string().url("invalid image url"),
});