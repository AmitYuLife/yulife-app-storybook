import { call, put, spawn, take } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { yuHealthNativeEventsChannel } from "../yuHealthNativeEvents.channels";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

interface NativeEvent {
  message: string;
}

export default function* listenToNativeYuHealthEvents() {
  const channel: ReturnType<typeof yuHealthNativeEventsChannel> = yield call(yuHealthNativeEventsChannel);
  while (true) {
    try {
      const results: NativeEvent = yield take(channel);
      yield put(logMixpanelEventActionCreator("yu_health_debug", { ...results }));
    } catch (e) {
      yield spawn(() => {
        Logger.error(e, { event: "listenToNativeYuHealthEvents" });
      });
    }
  }
}
