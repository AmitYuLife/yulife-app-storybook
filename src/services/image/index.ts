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
      await prefetchImages(items.map((asset) => asset.uri));
    } catch (error) {
      Logger.notify(error, { location: "image-service", event: "preload" });
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
