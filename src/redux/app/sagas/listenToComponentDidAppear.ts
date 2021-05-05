import { ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { call, put, take } from "redux-saga/effects";
import { updateCurrentRoute, updateCurrentModal } from "../app.actions";
import { appComponentDidAppearChannel } from "../app.channels";

export default function* listenToComponentDidAppear() {
  const navigationChannel: ReturnType<typeof appComponentDidAppearChannel> = yield call(appComponentDidAppearChannel);

  while (true) {
    const componentId: string = yield take(navigationChannel);

    yield call(Logger.logEvent, "screen_view", { name: componentId });

    if (componentId.includes(".modals")) {
      yield put(updateCurrentModal(componentId));
    } else if (componentId !== ROUTES.menu) {
      yield put(updateCurrentRoute(componentId));
    }
  }
}
