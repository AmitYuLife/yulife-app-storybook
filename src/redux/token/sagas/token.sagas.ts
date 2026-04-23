import { FetchResult } from "@apollo/client";
import { IntercomHashMethod, RefreshSessionMutation, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import { REFRESH_USER_TOKEN, refreshUserProfile } from "@redux/user/user.actions";
import { TOKEN_EXPIRATION } from "@services/constants";
import Logger from "@services/logger/logger";
import { setToken } from "@services/storage";
import { Platform } from "react-native";
import { call, put, takeLatest } from "redux-saga/effects";

export function* updateTokenIfExpired() {
  try {
    const result: FetchResult<RefreshSessionMutation> = yield call(() =>
      client().mutate({
        mutation: gql("RefreshSessionDocument"),
        variables: {
          tokenExpiration: TOKEN_EXPIRATION,
          intercomHashMethod: Platform.OS as IntercomHashMethod,
        },
        fetchPolicy: "no-cache",
      })
    );

    if (result.errors && result.errors.length) {
      yield call(() => {
        for (const error of result.errors) {
          Logger.notify(new Error(error.message), {
            event: "refreshSession",
            path: error.path?.join(","),
            locations: error.locations?.join(","),
          });
        }
      });
      return;
    }

    if (result.data.refreshSession.token) {
      yield call(setToken, result.data.refreshSession.token);

      // also trigger a user session refresh
      yield put(refreshUserProfile());
    }
  } catch {
    // Added that to catch Unhandled Promise Rejection when Network request failed.
    // Sagas stop to work because a request fails when app is opened in offline mode
    // because of that we should wrap it into a try/catch block.
  }
}

export default [takeLatest(REFRESH_USER_TOKEN, updateTokenIfExpired)];
