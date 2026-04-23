import { call, spawn, take } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import { yuHealthNativeEventsChannel } from "../yuHealthNativeEvents.channels";

interface NativeEvent {
  message: string;
}

export default function* listenToNativeYuHealthEvents() {
  const channel: ReturnType<typeof yuHealthNativeEventsChannel> = yield call(yuHealthNativeEventsChannel);
  while (true) {
    try {
      const results: NativeEvent = yield take(channel);
      Logger.warn("YuHealth native event", { message: results.message, location: "yu-health-native" });
    } catch (e) {
      yield spawn(() => {
        Logger.notify(e, { event: "listenToNativeYuHealthEvents" });
      });
    }
  }
}
