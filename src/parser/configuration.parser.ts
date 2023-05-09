import { Args } from "../models/args.ts";
import { configFileSchema, Configuration } from "../models/configuration.ts";

export async function getConfiguration(args: Args): Promise<Configuration> {
  const rawConfigFile = await Deno.readTextFile(args.configPath);
  const configFile = await configFileSchema.parseAsync(
    JSON.parse(rawConfigFile),
  );
  const token = args.token ?? configFile.token ?? Deno.env.get("TOKEN");
  const api = args.api ?? configFile.api ?? Deno.env.get("API");

  if (!token || !api) {
    throw new Error(`No value set for token (${token}) or api (${api}) set.`);
  }

  return { ...configFile, token: token as string, api: api as string };
}
