import { NextRequest, NextResponse } from "next/server";

import { config as configuration } from "@/configuration";

import Routes from "../../../../lib/Routes";

export const config = {
  runtime: "edge",
};

const {
  projects: { CACHE_TTL },
} = configuration.constants;

const apiKey = process.env.API_KEY as string;

if (!apiKey) {
  throw new Error("API_KEY is not defined");
}

export default async function handler(req: NextRequest, _res: NextResponse) {
  try {
    // Fetch projects
    const allProjects = await fetchProjects(req);

    // Handle error
    if (allProjects?.error) {
      throw new Error(allProjects.error);
    }

    // Handle no data
    if (allProjects?.data?.length < 1) {
      return NoDataResponse;
    }

    // Return data
    return NextResponse.json(
      { data: allProjects.data },
      {
        status: 200,
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_TTL}, stale-while-revalidate`,
          Encoding: "br, gzip, deflate, compress",
        },
      }
    );
  } catch (error) {
    // Handle error
    return handleError(error as Error);
  }
}

// Fetch projects
async function fetchProjects(req: NextRequest) {
  const url =
    req.nextUrl.origin + Routes.BASE_PATH + Routes.API_PATH + "/project-data";

  return await fetch(url, {
    headers: {
      "x-api-key": apiKey,
    },
  }).then((res) => res.json());
}

// Handle no data
const NoDataResponse = NextResponse.json(
  { error: "No projects found" },
  { status: 404 }
);

// Handle error
async function handleError(error: Error) {
  return NextResponse.json({ error: error.message }, { status: 500 });
}
