import { z } from "../deps.ts";

export const argsSchema = z.object({
  configPath: z.string(),
  api: z.string().optional(),
  token: z.string().optional(),
});

export type Args = z.infer<typeof argsSchema>;
