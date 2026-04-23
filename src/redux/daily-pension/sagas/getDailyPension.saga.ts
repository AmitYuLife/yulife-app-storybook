import Logger from "@services/logger/logger";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import { call, put, spawn } from "redux-saga/effects";
import { updateDailyPensionSuccess } from "../daily-pension.actions";
import client from "@graphql/_core/client";
import { GetDailyPensionContributionQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";

export default function* getDailyPension() {
  try {
    const token: Unpacked<typeof getToken> = yield call(getToken);
    if (token) {
      const { data }: QueryResult<GetDailyPensionContributionQuery> = yield call(() =>
        client().query({
          fetchPolicy: "network-only",
          query: gql("GetDailyPensionContributionDocument"),
        })
      );

      if (data?.getDailyPensionContribution) {
        yield put(
          updateDailyPensionSuccess({
            active: data.getDailyPensionContribution.active,
            yuCoinAwarded: data.getDailyPensionContribution.yuCoinAwarded,
            contribution: data.getDailyPensionContribution.contribution,
          })
        );
      }
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "getDailyPension" });
    });
  }
}
