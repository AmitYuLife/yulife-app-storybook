import { call, put, spawn, take, select } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { nativeEventsChannel } from "../nativeEvents.channels";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { getUserFeatures } from "@redux/user/user.selectors";

interface NativeEvent {
  type: string;
  message: string;
}

export default function* listenToNativeEvents() {
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  if (features.disableFitkitEventsLogging) {
    return;
  }

  const channel: ReturnType<typeof nativeEventsChannel> = yield call(nativeEventsChannel);
  while (true) {
    try {
      const results: NativeEvent = yield take(channel);
      yield put(logMixpanelEventActionCreator("app_debug", { ...results }));
    } catch (e) {
      yield spawn(() => {
        Logger.error(e, { event: "listenToNativeEvents" });
      });
    }
  }
}
