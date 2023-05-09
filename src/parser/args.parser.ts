import { parse } from "../deps.ts";
import { Args } from "../models/args.ts";

export function getArgs(): Args {
  const args = parse(Deno.args, { string: ["configPath", "api", "token"] });
  if (!args.configPath) {
    throw new Error("Please set the path to the course you want to import.");
  }
  return { ...args, configPath: args.configPath as string };
}
