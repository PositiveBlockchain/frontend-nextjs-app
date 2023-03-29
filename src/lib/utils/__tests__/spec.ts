import { extractFiltersFromProjectData } from "..";
import projectData from "../../../sampleData/projectData.json";

/**
 * NB: We check for some but not all of the items since the arrays are so large.
 */

describe("extractFiltersFromProjectData", () => {
  const filters = extractFiltersFromProjectData(projectData.data);
  it("should return categories", () => {
    const arr = filters["main_category"];
    expect(arr).toHaveLength(17);
    expect(arr).toEqual(
      expect.arrayContaining([
        "Finance & insurance",
        "Climate & Environment",
        "Agriculture & Food",
      ])
    );
  });

  it("should return blockchainType", () => {
    const arr = filters["blockchain_type"];
    expect(arr).toHaveLength(11);
    expect(arr).toEqual(expect.arrayContaining(["Public", "Private"]));
  });

  it("should return blockchain_technology", () => {
    const arr = filters["blockchain_technology"];
    expect(arr).toHaveLength(145);
    expect(arr).toEqual(
      expect.arrayContaining(["Gardens", "xDAI", "Ethereum", "Treum"])
    );
  });

  it("should return primary_headquarter_country", () => {
    const arr = filters["primary_headquarter_country"];
    expect(arr).toHaveLength(92);
    expect(arr).toEqual(
      // Too many
      expect.arrayContaining([
        "Distributed",
        "Switzerland",
        "Fiji",
        "Australia",
        "United States",
      ])
    );
  });
});
