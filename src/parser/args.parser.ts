import { parse } from "../deps.ts";
import { Args } from "../models/args.ts";

export function parseArgs(rawArgs: string[] = Deno.args): Args {
  const args = parse(rawArgs, { string: ["configPath", "api", "token"] });
  if (!args.configPath) {
    throw new Error("Please set the path to the course you want to import.");
  }
  return {
    configPath: args.configPath as string,
    api: args.api,
    token: args.token,
  };
}
