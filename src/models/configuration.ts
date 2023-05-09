import { z } from "../deps.ts";

export const configFileSchema = z.object({
  api: z.string().optional(),
  token: z.string().optional(),
  course: z.number(),
});

export const configurationSchema = z.object({
  api: z.string(),
  token: z.string(),
  course: z.number(),
});

export type Configuration = z.infer<typeof configurationSchema>;
