import { call, spawn, take } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import { nativeEventsChannel } from "../nativeEvents.channels";

interface NativeEvent {
  type: string;
  message: string;
}

export default function* listenToNativeEvents() {
  const channel: ReturnType<typeof nativeEventsChannel> = yield call(nativeEventsChannel);
  while (true) {
    try {
      const results: NativeEvent = yield take(channel);
      yield call(Logger.info, results.type, { message: results.message });
    } catch (e) {
      yield spawn(() => {
        Logger.notify(e, { event: "listenToNativeEvents" });
      });
    }
  }
}
