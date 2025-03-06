import { ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import socket, { DETOX_ENABLED } from "@services/socket";
import { call, put, select, take } from "redux-saga/effects";
import { updateCurrentRoute, updateCurrentModal } from "../app.actions";
import { appComponentDidAppearChannel } from "../app.channels";
import { getRouteState } from "../app.selectors";

export default function* listenToComponentDidAppear() {
  const navigationChannel: ReturnType<typeof appComponentDidAppearChannel> = yield call(appComponentDidAppearChannel);

  while (true) {
    const componentId: string = yield take(navigationChannel);

    // On android there is additional Navigation CommandListener registered as a fallback
    // because ComponentDidAppearEvent is not always being emitted. As a consequence of that
    // we are getting duplicate channel messages for same componentId
    const currentRoute: string = yield select(getRouteState);
    if (componentId === currentRoute) {
      continue;
    }

    if (componentId.includes(".modals")) {
      yield put(updateCurrentModal({ modal: componentId }));
    } else if (componentId !== ROUTES.menu) {
      yield put(updateCurrentRoute({ route: componentId }));
    }

    if (DETOX_ENABLED) {
      socket.emitTranslationKeysCleared();
    }

    yield call(Logger.logEvent, "screen_view", { name: componentId });
  }
}
