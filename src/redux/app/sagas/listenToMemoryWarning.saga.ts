import { clearImageMemoryCache } from "@atoms";
import { call, take } from "redux-saga/effects";
import { memoryWarningChannel } from "../app.channels";

export default function* listenToMemoryWarning() {
  const memoryWarning: ReturnType<typeof memoryWarningChannel> = yield call(memoryWarningChannel);
  const isRunningOutOfMemory: boolean = yield take(memoryWarning);

  //Clean memory cache to free some space
  if (isRunningOutOfMemory) {
    yield call(clearImageMemoryCache);
  }
}
