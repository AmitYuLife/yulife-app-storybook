import { call, spawn, take } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import dd from "@services/datadog";
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
      yield call(dd.info, results.type, { message: results.message });
    } catch (e) {
      yield spawn(() => {
        Logger.error(e, { event: "listenToNativeEvents" });
      });
    }
  }
}
