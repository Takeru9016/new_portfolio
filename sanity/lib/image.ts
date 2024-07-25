import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image | undefined): string => {
  if (!source || !source.asset) {
    return ""; // or a default image URL
  }
  return imageBuilder.image(source).auto("format").fit("max").url();
};
