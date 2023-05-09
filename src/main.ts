import { getCourseClient } from "./client/course.client.ts";
import { parseArgs } from "./parser/args.parser.ts";
import { getConfiguration } from "./parser/configuration.parser.ts";

async function main() {
  const args = parseArgs();
  const configuration = await getConfiguration(args);
  const coursesClient = getCourseClient(configuration);

  const course = await coursesClient.getCourseContents(2);
  console.log(course);
}

if (import.meta.main) {
  main();
}
