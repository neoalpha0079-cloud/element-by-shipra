import type { SanityDocument } from "sanity";

import { client } from "./client";
import * as queries from "./queries";


type QueryResult<T> = T | null;

export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<QueryResult<T>> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId || projectId === "your_project_id_here") {
    return null;
  }

  try {
    const result = await client.fetch<T>(query, params ?? {});
    return result ?? null;
  } catch {
    return null;
  }
}

export {
  siteSettingsQuery,
  navigationQuery,
  heroQuery,
  servicesQuery,
  projectsQuery,
  testimonialsQuery,
  testimonialStatsQuery,
  blogPostsQuery,
  promisesQuery,
  aboutSectionQuery,
  transformationQuery,
  turnkeyProcessQuery,
  consultationQuery,
} from "./queries";

export type { SanityDocument };
