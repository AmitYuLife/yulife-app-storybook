import { Source, prefetchImages } from "@atoms";
import Logger from "@services/logger/logger";

const queue: Source[] = [];
let timer: ReturnType<typeof setInterval> | null = null;

const BATCH_SIZE = 15;
const TIMEOUT = 5000; //ms

const preload = async (): Promise<void> => {
  if (queue.length > 0) {
    const items = queue.splice(-BATCH_SIZE, BATCH_SIZE);
    try {
      const uris = items
        .map((asset) => {
          if (typeof asset === "string") {
            return asset;
          }

          if (typeof asset === "object" && asset !== null && "uri" in asset && typeof asset.uri === "string") {
            return asset.uri;
          }

          return null;
        })
        .filter((uri): uri is string => uri !== null);
      await prefetchImages(uris);
    } catch (error) {
      Logger.error(error, { location: "image-service", event: "preload" });
    }
  }
};

export const cache = async (items: Source[]): Promise<void> => {
  queue.push(...items);
  if (timer === null) {
    await preload();
    timer = setInterval(preload, TIMEOUT);
  }
};
