import { Course } from "../models/course.ts";
import { Client, getMoodle } from "./client.ts";

export function getCourseClient(props: Client) {
  return {
    getCourses: async () => {
      return await getMoodle<Course[]>({
        ...props,
        functionName: "core_course_get_courses",
      });
    },
    getCourseContents: async (id: number) => {
      return await getMoodle<Record<string, unknown>>({
        ...props,
        functionName: "core_course_get_contents",
      }, { courseid: id.toString() });
    },
  };
}
