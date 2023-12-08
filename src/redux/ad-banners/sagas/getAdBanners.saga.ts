import { ApolloQueryResult } from "@apollo/client";
import { call, put, select } from "redux-saga/effects";
import { getUserNotification } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import client from "@graphql/_core/client";
import { gql, GetAdBannersQuery } from "@graphql/__generated";
import { addAdBanners } from "../ad-banners.actions";

export default function* getAdBannersSaga() {
  const userNotification: ReturnType<typeof getUserNotification> = yield select(getUserNotification);

  if (!userNotification.hasAdBanners) {
    return;
  }

  try {
    const result: ApolloQueryResult<GetAdBannersQuery> = yield call(() =>
      client().query({
        query: gql(`GetAdBannersDocument`),
        variables: { place: "dailyScreen" }, // we only have ads on dailyScreen for now
        fetchPolicy: "cache-first",
      })
    );

    if (result?.data?.getAdBanners.length) {
      yield put(addAdBanners(result.data.getAdBanners));
    }
  } catch (error) {
    Logger.error(error, { event: "getAdBannersSaga" });
  }
}
