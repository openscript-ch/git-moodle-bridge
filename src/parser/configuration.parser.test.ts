import { assertEquals, stub } from "../deps.ts";
import { Args } from "../models/args.ts";
import { Configuration } from "../models/configuration.ts";
import { getConfiguration } from "./configuration.parser.ts";

Deno.test("getConfiguration: should return a valid configuration", async () => {
  const denoReadTextFileStub = stub(
    Deno,
    "readTextFile",
    () =>
      Promise.resolve(`{
    "api": "http://localhost:8080/webservice/rest/server.php",
    "token": "bd9812144e31962db6a37e980b90e3e7",
    "course": 2
  }
  `),
  );

  const args: Args = {
    configPath: "test/config.json",
  };

  const expected: Configuration = {
    api: "http://localhost:8080/webservice/rest/server.php",
    token: "bd9812144e31962db6a37e980b90e3e7",
    course: 2,
  };

  const actual = await getConfiguration(args);

  assertEquals(actual, expected);
  denoReadTextFileStub.restore();
});
