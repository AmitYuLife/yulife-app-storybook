import getMagicLinkWithClient from "@graphql/user/getMagicLink.gql";
import Logger from "@services/logging/logger";
import { call, spawn } from "redux-saga/effects";
import { handleOpenWebView } from "@navigation/utils";

export default function* openMemberZoneSaga() {
  try {
    const { data } = yield call(getMagicLinkWithClient);

    if (!data?.getMagicLink) {
      // guard even w/ low chance of happening
      // if user was able to sign in to the app,
      // they should be able to get a magic link
      return;
    }

    yield call(handleOpenWebView, { uri: data.getMagicLink, title: "member zone" });
  } catch (e) {
    yield spawn(() => Logger.logMixpanelError(e, "openMemberZone"));
  }
}
