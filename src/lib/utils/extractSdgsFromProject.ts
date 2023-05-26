import { Project } from "@/types";
import { isUndefined, uniq } from "lodash/fp";

/**
 * Extracts the SDGs (Sustainable Development Goals) from a project.
 * @param project - The project object.
 * @returns An array of unique SDG values extracted from the project.
 */
export function extractSdgsFromProject(project: Project) {
  return uniq(
    project["sdg_occurrences_list"]
      .filter((x) => x !== "" && !isUndefined(x))
      .sort((a, b) => Number(a) - Number(b))
  );
}