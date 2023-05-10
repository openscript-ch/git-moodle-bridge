import { assertEquals, assertThrows } from "../deps.ts";
import { parseArgs } from "./args.parser.ts";

Deno.test("parseArgs()", () => {
  assertEquals(
    parseArgs([
      "--configPath=/some/fancy/path",
      "--api=https://lms.example.com/api",
      "--token=S0M3T0K3N",
    ]),
    {
      configPath: "/some/fancy/path",
      api: "https://lms.example.com/api",
      token: "S0M3T0K3N",
    },
  );
});

Deno.test("parseArgs() without configPath", () => {
  assertThrows(
    () =>
      parseArgs([
        "--api=https://lms.example.com/api",
        "--token=S0M3T0K3N",
      ]),
    Error,
    "Please set the path to the course you want to import.",
  );
});
