import { call, put, spawn, take, select } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { yuHealthNativeEventsChannel } from "../yuHealthNativeEvents.channels";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { getUserFeatures } from "@redux/user/user.selectors";

interface NativeEvent {
  message: string;
}

export default function* listenToNativeYuHealthEvents() {
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  if (features.disableFitkitEventsLogging) {
    return;
  }

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
