import { IntercomHashMethod } from "@graphql/_core/schema/globalTypes";
import refreshSession, { RefreshSessionExecutionResult } from "@graphql/user/refreshSession.gql";
import { REFRESH_USER_TOKEN } from "@redux/user/user.actions";
import { TOKEN_EXPIRATION } from "@services/constants";
import logger from "@services/logging/logger";
import { setToken } from "@services/storage";
import { Platform } from "react-native";
import { call, takeLatest } from "redux-saga/effects";

export function* updateTokenIfExpired() {
  try {
    const result: RefreshSessionExecutionResult = yield call(refreshSession, {
      tokenExpiration: TOKEN_EXPIRATION,
      intercomHashMethod: Platform.OS as IntercomHashMethod,
    });

    if (result.errors && result.errors.length) {
      yield call(() => logger.logMixpanelError("error trying to refresh session", result.errors));
      return;
    }

    if (result.data.refreshSession.token) {
      yield call(setToken, result.data.refreshSession.token);
    }
  } catch (e) {
    // Added that to catch Unhandled Promise Rejection when Network request failed.
    // Sagas stop to work because a request fails when app is opened in offline mode
    // because of that we should wrap it into a try/catch block.
  }
}

export default [takeLatest(REFRESH_USER_TOKEN, updateTokenIfExpired)];
