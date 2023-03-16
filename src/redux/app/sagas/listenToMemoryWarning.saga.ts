import FastImage from "react-native-fast-image";
import { call, take } from "redux-saga/effects";
import { memoryWarningChannel } from "../app.channels";

export default function* listenToMemoryWarning() {
  const memoryWarning: ReturnType<typeof memoryWarningChannel> = yield call(memoryWarningChannel);
  const isRunningOutOfMemory: boolean = yield take(memoryWarning);

  if (isRunningOutOfMemory) {
    //Clean FastImage memory cache to free some space
    yield call(FastImage.clearMemoryCache);
  }
}
