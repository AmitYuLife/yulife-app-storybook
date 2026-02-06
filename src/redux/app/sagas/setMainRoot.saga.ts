import moment from "moment";
import { Linking } from "react-native";
import getSession from "@graphql/user/getSession.gql";
import deepLink from "@navigation/deepLink";
import {
  setAuthenticatedRoot,
  setOfflineRoot,
  setUnauthenticatedRoot,
  expireSession,
  setForceUpdateRoot,
  showUpdateAppModal,
} from "@navigation/root";
import { getUserSessionSuccess, refreshUserToken } from "@redux/user/user.actions";
import Logger from "@services/logging/logger";
import { getToken } from "@services/storage";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { call, delay, put, select } from "redux-saga/effects";
import { setAuthenticated, setUnauthenticated } from "../app.actions";
import { Unpacked } from "@utils";
import { getRouteState } from "../app.selectors";
import { GetSessionQuery } from "@graphql/__generated";

export interface ITokenAndMobileUpgradeStatus {
  tokenStatus: TokenStatus;
  mobileUpgrade: GetSessionQuery["mobileUpgradeRequired"];
}

type TokenStatus = "refreshing" | "valid" | "invalid" | null;

export default function* setMainRootSaga() {
  const token: Unpacked<typeof getToken> = yield call(getToken);

  if (token) {
    const connectionInfo: NetInfoState = yield call(() => NetInfo.fetch());

    if (connectionInfo.type === "none") {
      yield call(setOfflineRoot);
    } else {
      yield call(refreshUserSession, { coldStart: true });
    }

    yield put(setAuthenticated());
  } else {
    yield call(setUnauthenticatedRoot);
    yield put(setUnauthenticated());
  }

  const url: string = yield call(Linking.getInitialURL);

  if (url) {
    // a small delay for a better UX
    yield delay(200);
    const currentRoute: string = yield select(getRouteState);
    yield call(deepLink.init, url, !!token, currentRoute);
  }
}

interface IRefreshUserSessionArgs {
  coldStart?: boolean;
}

export function* refreshUserSession({ coldStart }: IRefreshUserSessionArgs = {}) {
  const { tokenStatus, mobileUpgrade }: ITokenAndMobileUpgradeStatus = yield call(getTokenAndMobileUpgradeStatus);

  if (tokenStatus === "refreshing") {
    yield put(refreshUserToken());
  }

  /**
   * If tokenStatus is null means there is an error, do not set up
   * authenticated root to avoid showing the app when some requests
   * are timing out
   **/
  if (!!tokenStatus && tokenStatus !== "invalid") {
    yield put(getUserSessionSuccess());
    if (!coldStart) {
      return;
    }

    if (mobileUpgrade && !mobileUpgrade.isDismissable) {
      yield call(setForceUpdateRoot, {
        title: mobileUpgrade.title,
        description: mobileUpgrade.message,
        imageUrl: mobileUpgrade.imageUrl,
      });
    } else if (coldStart) {
      yield call(setAuthenticatedRoot);
    }

    if (mobileUpgrade && mobileUpgrade.isDismissable) {
      showUpdateAppModal(mobileUpgrade.title, mobileUpgrade.message);
    }
  }
}

async function getTokenAndMobileUpgradeStatus(): Promise<ITokenAndMobileUpgradeStatus> {
  try {
    const { data, errors } = await getSession();

    if (errors && errors.length) {
      for (const error of errors) {
        Logger.error(error, { message: "error trying to get user session" });
      }
    }

    if ((data && data.getSession === null) || errors?.length) {
      await expireSession();
      return { tokenStatus: "invalid", mobileUpgrade: data?.mobileUpgradeRequired };
    }

    const expiresAt = moment.unix(data.getSession.expires);
    const isExpired = moment().isAfter(expiresAt);

    if (isExpired) {
      await expireSession();
      return { tokenStatus: "invalid", mobileUpgrade: data.mobileUpgradeRequired };
    }

    const tokenStatus =
      data.getSession.tokenRefreshRequired || moment().add(30, "days").isAfter(expiresAt) ? "refreshing" : "valid";
    return { tokenStatus, mobileUpgrade: data.mobileUpgradeRequired };
  } catch (e) {
    return { tokenStatus: null, mobileUpgrade: null };
  }
}
