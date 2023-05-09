import { z } from "../deps.ts";

export const courseSchema = z.object({
  id: z.number(),
  fullname: z.string(),
});

export type Course = z.infer<typeof courseSchema>;
