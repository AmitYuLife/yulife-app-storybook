import handleDeepLink from "@navigation/handleDeepLink";
import { getToken } from "@services/storage";
import { call, take } from "redux-saga/effects";
import { iosLinkingChannel } from "../app.channels";

export default function* listenToLinkingSaga() {
  const stateChannel = yield call(iosLinkingChannel);

  while (true) {
    const url = yield take(stateChannel);
    const token = yield call(getToken);

    if (url && !!url.url) {
      yield call(handleDeepLink, url.url, token);
    }
  }
}
