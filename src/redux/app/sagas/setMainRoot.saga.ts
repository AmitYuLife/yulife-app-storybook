import getSession from "@graphql/user/getSession.gql";
import handleDeepLink from "@navigation/handleDeepLink";
import { setAuthenticatedRoot, setOfflineRoot, setUnauthenticatedRoot, expireSession } from "@navigation/root";
import { refreshUserToken } from "@redux/user/user.actions";
import Logger from "@services/logging/logger";
import { getToken } from "@services/storage";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import moment from "moment";
import { call, put } from "redux-saga/effects";
import { setAuthenticated, setUnauthenticated } from "../app.actions";

interface IMainRootPayload {
  payload: string;
  type: string;
}

type TokenStatus = "refreshing" | "valid" | "invalid" | null;

export default function* setMainRootSaga({ payload }: IMainRootPayload) {
  const token = yield call(getToken);

  if (token) {
    const connectionInfo: NetInfoState = yield call(() => NetInfo.fetch());

    if (connectionInfo.type === "none") {
      yield call(setOfflineRoot);
    } else {
      const tokenStatus: TokenStatus = yield call(getTokenStatus);

      if (tokenStatus === "refreshing") {
        yield put(refreshUserToken());
      }

      /**
       * If tokenStatus is null means there is an error, do not set up
       * authenticated root to avoid showing the app when some requests
       * are timing out
       **/
      if (!!tokenStatus && tokenStatus !== "invalid") {
        yield call(setAuthenticatedRoot);
      }
    }

    yield put(setAuthenticated());
  } else {
    yield call(setUnauthenticatedRoot);
    yield put(setUnauthenticated());
  }

  if (payload) {
    yield call(handleDeepLink, payload, token);
  }
}

async function getTokenStatus(): Promise<TokenStatus> {
  try {
    const { data, errors } = await getSession();

    if (errors && errors.length) {
      for (const error of errors) {
        Logger.error(error, { message: "error trying to get user session" });
      }

      return null;
    }

    if (data && data.getSession === null) {
      await expireSession();
      return "invalid";
    }

    const expiresAt = moment.unix(data.getSession.expires);
    const isExpired = moment().isAfter(expiresAt);

    if (isExpired) {
      await expireSession();
      return "invalid";
    }

    return !isExpired && moment().add(30, "days").isAfter(expiresAt) ? "refreshing" : "valid";
  } catch (e) {
    return null;
  }
}
