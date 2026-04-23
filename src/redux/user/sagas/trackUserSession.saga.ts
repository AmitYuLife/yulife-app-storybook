import { AUTHENTICATED } from "@redux/app/app.actions";
import { refreshUserSession } from "@redux/app/sagas/setMainRoot.saga";
import Logger from "@services/logger/logger";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import { call, delay, select, spawn } from "redux-saga/effects";
import { sessionTimestamp } from "../user.selectors";
import { region } from "@locale";

const DEFAULT_SESSION_TIMEOUT = 1000 * 60 * 60; // 1 hour
const DELAY_TIMEOUT = 1000 * 10; // 10 seconds

interface Params {
  type: string;
}

export default function* trackUserSession({ type }: Params = { type: "" }) {
  try {
    if (type === AUTHENTICATED) {
      yield delay(DELAY_TIMEOUT);
    }

    const shouldRefresh: boolean = yield call(shouldRefreshSession);

    if (shouldRefresh) {
      yield call(refreshUserSession);
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "trackUserSession" });
    });
  }
}

function* shouldRefreshSession() {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return false;
  }

  const lastTimestamp: ReturnType<typeof sessionTimestamp> = yield select(sessionTimestamp);

  if (!lastTimestamp) {
    return true;
  }

  const sessionTimeout = region.getConfig("sessionTimeout") || DEFAULT_SESSION_TIMEOUT;

  const currentTime = Date.now();
  const timeSinceLast = currentTime - lastTimestamp;
  return timeSinceLast >= sessionTimeout;
}
