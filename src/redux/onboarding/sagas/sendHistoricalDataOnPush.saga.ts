import getCurrentUserWithClient from "@graphql/user/getCurrentUser.gql";
import Logger from "@services/logging/logger";
import moment from "moment";
import { call, spawn } from "redux-saga/effects";
import sendHistoricalData from "./sendHistoricalData.helper";

export default function* sendHistoricalDataOnPushSaga() {
  try {
    const { data } = yield call(getCurrentUserWithClient);
    const onboardingDate = data && data.getCurrentUser ? data.getCurrentUser.onboardingDate : null;

    if (onboardingDate && onboardingDate.length === 19) {
      yield call(sendHistoricalData, moment(onboardingDate));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "sendHistoricalDataOnPushSaga" });
    });
  }
}
