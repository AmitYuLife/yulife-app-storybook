import handleDeepLink from "@navigation/handleDeepLink";
import { getRouteState } from "@redux/app/app.selectors";
import { getToken } from "@services/storage";
import { Unpacked } from "@services/utils";
import { call, select, take } from "redux-saga/effects";
import { iosLinkingChannel } from "../app.channels";

export default function* listenToLinkingSaga() {
  const stateChannel: ReturnType<typeof iosLinkingChannel> = yield call(iosLinkingChannel);

  while (true) {
    const url: { url: string } = yield take(stateChannel);
    const token: Unpacked<typeof getToken> = yield call(getToken);

    if (url && !!url.url) {
      const currentRoute: string = yield select(getRouteState);
      yield call(handleDeepLink, url.url, !!token, currentRoute);
    }
  }
}
