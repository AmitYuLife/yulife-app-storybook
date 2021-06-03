import getSession from "@graphql/user/getSession.gql";
import handleDeepLink from "@navigation/handleDeepLink";
import {
  setAuthenticatedRoot,
  setOfflineRoot,
  setUnauthenticatedRoot,
  expireSession,
  setForceUpdateRoot,
  showUpdateAppModal,
} from "@navigation/root";
import { refreshUserToken } from "@redux/user/user.actions";
import Logger from "@services/logging/logger";
import { getToken } from "@services/storage";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import moment from "moment";
import { call, put } from "redux-saga/effects";
import { setAuthenticated, setUnauthenticated } from "../app.actions";
import { Unpacked } from "@services/utils";
import { GetSession_mobileUpgradeRequired } from "@graphql/_core/schema";

interface IMainRootPayload {
  payload: string;
  type: string;
}

interface TokenAndMobileUpgrateStatus {
  tokenStatus: TokenStatus;
  mobileUpgrade: GetSession_mobileUpgradeRequired;
}

type TokenStatus = "refreshing" | "valid" | "invalid" | null;

export default function* setMainRootSaga({ payload }: IMainRootPayload) {
  const token: Unpacked<typeof getToken> = yield call(getToken);

  if (token) {
    const connectionInfo: NetInfoState = yield call(() => NetInfo.fetch());

    if (connectionInfo.type === "none") {
      yield call(setOfflineRoot);
    } else {
      const { tokenStatus, mobileUpgrade }: TokenAndMobileUpgrateStatus = yield call(getTokenAndMobileUpgrateStatus);

      if (tokenStatus === "refreshing") {
        yield put(refreshUserToken());
      }

      /**
       * If tokenStatus is null means there is an error, do not set up
       * authenticated root to avoid showing the app when some requests
       * are timing out
       **/
      if (!!tokenStatus && tokenStatus !== "invalid") {
        if (mobileUpgrade && !mobileUpgrade.isDismissable) {
          yield call(setForceUpdateRoot, {
            title: mobileUpgrade.title,
            description: mobileUpgrade.message,
            imageUrl: mobileUpgrade.imageUrl,
          });
        } else {
          yield call(setAuthenticatedRoot);
        }

        if (mobileUpgrade && mobileUpgrade.isDismissable) {
          showUpdateAppModal(mobileUpgrade.title, mobileUpgrade.message);
        }
      }
    }

    yield put(setAuthenticated());
  } else {
    yield call(setUnauthenticatedRoot);
    yield put(setUnauthenticated());
  }

  if (payload) {
    yield call(handleDeepLink, payload, !!token);
  }
}

async function getTokenAndMobileUpgrateStatus(): Promise<TokenAndMobileUpgrateStatus> {
  try {
    const { data, errors } = await getSession();

    if (errors && errors.length) {
      for (const error of errors) {
        Logger.error(error, { message: "error trying to get user session" });
      }
    }

    if ((data && data.getSession === null) || errors.length) {
      await expireSession();
      return { tokenStatus: "invalid", mobileUpgrade: data?.mobileUpgradeRequired };
    }

    const expiresAt = moment.unix(data.getSession.expires);
    const isExpired = moment().isAfter(expiresAt);

    if (isExpired) {
      await expireSession();
      return { tokenStatus: "invalid", mobileUpgrade: data.mobileUpgradeRequired };
    }

    const tokenStatus = !isExpired && moment().add(30, "days").isAfter(expiresAt) ? "refreshing" : "valid";
    return { tokenStatus, mobileUpgrade: data.mobileUpgradeRequired };
  } catch (e) {
    return { tokenStatus: null, mobileUpgrade: null };
  }
}
