import getMagicLinkWithClient from "@graphql/user/getMagicLink.gql";
import Logger from "@services/logging/logger";
import { call, spawn } from "redux-saga/effects";
import { handleOpenWebView } from "@navigation/utils";

export default function* openMemberZoneSaga() {
  try {
    const { data } = yield call(getMagicLinkWithClient);
    yield call(handleOpenWebView, { uri: data.getMagicLink, title: "member zone" });
  } catch (e) {
    yield spawn(() => Logger.logMixpanelError(e, "openMemberZone"));
  }
}
