import FastImage, { Source } from "react-native-fast-image";
import Logger from "@services/logging/logger";

const queue: Source[] = [];
let timer: NodeJS.Timeout | null = null;

const BATCH_SIZE = 15;
const TIMEOUT = 5000; //ms

const preload = () => {
  if (queue.length > 0) {
    const items = queue.splice(-BATCH_SIZE, BATCH_SIZE);
    try {
      FastImage.preload(items);
    } catch (error) {
      Logger.error(error, { location: "image-service", event: "preload" });
    }
  }
};

export const cache = (items: Source[]) => {
  queue.push(...items);
  if (timer === null) {
    preload();
    timer = setInterval(preload, TIMEOUT);
  }
};
