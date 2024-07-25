import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schema";
import { apiVersion, studioUrl, projectId, dataset } from "./sanity/env";

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "Personal Website with Sanity.io";

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || "",
  dataset: dataset || "",
  title,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
