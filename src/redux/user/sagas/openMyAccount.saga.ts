import getMagicLinkWithClient from "@graphql/user/getMagicLink.gql";
import Logger from "@services/logging/logger";
import { call, spawn } from "redux-saga/effects";
import { handleOpenWebView } from "@navigation/utils";

export default function* openMyAccountSaga() {
  try {
    const { data } = yield call(() => getMagicLinkWithClient({ goToMyAccount: true }));

    if (!data?.getMagicLink) {
      // guard even w/ low chance of happening
      // if user was able to sign in to the app,
      // they should be able to get a magic link
      return;
    }

    yield call(handleOpenWebView, { uri: data.getMagicLink, title: "Account" });
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "openMyAccount" });
    });
  }
}
