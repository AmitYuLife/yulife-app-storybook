import Logger from "@services/logging/logger";
import { call, put, take, select } from "redux-saga/effects";
import { updateCurrentModal } from "../app.actions";
import { appComponentDidDisappearChannel } from "../app.channels";
import { getRouteState } from "../app.selectors";
import getClient from "@services/bugsnag";

// turn this one when in main.ts we'll have:
// modalPresentationStyle: OptionsModalPresentationStyle.formSheet
const IS_NATIVE_IOS_MODAL_ON = false;

export default function* listenToComponentDidDisappear() {
  const navigationChannel: ReturnType<typeof appComponentDidDisappearChannel> = yield call(
    appComponentDidDisappearChannel
  );

  while (true) {
    const componentId: string = yield take(navigationChannel);

    if (componentId.includes(".modals")) {
      const currentRoute: string = yield select(getRouteState);

      if (IS_NATIVE_IOS_MODAL_ON) {
        yield call(Logger.logEvent, "screen_view", { name: currentRoute });
      }

      yield put(updateCurrentModal({ modal: null }));
    }

    yield call(getClient().leaveBreadcrumb, "RNN componentDidDisappear", { componentId }, "navigation");
  }
}
