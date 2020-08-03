import updateLeaderboardConsentGql from "@graphql/member/updateLeaderboardConsent.gql";
import Logger from "@services/logging/logger";
import { call, put, spawn } from "redux-saga/effects";
import {
  updateLeaderboardConsent,
  updateLeaderboardConsentFailed,
  updateLeaderboardConsentSuccess,
} from "../user.actions";

export default function* updateLeaderboardConsentSaga({ payload }: ReturnType<typeof updateLeaderboardConsent>) {
  try {
    yield call(updateLeaderboardConsentGql, payload);
    yield put(updateLeaderboardConsentSuccess(payload));
  } catch (e) {
    yield put(updateLeaderboardConsentFailed(payload));
    yield spawn(() => Logger.logMixpanelError(e, "updateLeaderboardConsentSaga"));
  }
}
