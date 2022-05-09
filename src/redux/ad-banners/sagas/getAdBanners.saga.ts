import { call, put, select } from "redux-saga/effects";

import { getUserNotification } from "@redux/user/user.selectors";
import { Unpacked } from "@utils";
import getAdBannersQuery from "@graphql/adBanners/getAdBanners.gql";
import { addAdBannersUserProfileEvents } from "@redux/user/user.actions";
import Logger from "@services/logging/logger";

export default function* getAdBannersSaga() {
  const userNotification: ReturnType<typeof getUserNotification> = yield select(getUserNotification);

  if (!userNotification.hasAdBanners) {
    return;
  }

  try {
    const result: Unpacked<typeof getAdBannersQuery> = yield call(() => getAdBannersQuery("dailyScreen")); // we only have ads on dailyScreen for now

    if (result?.data?.getAdBanners.length) {
      yield put(addAdBannersUserProfileEvents(result?.data?.getAdBanners));
    }
  } catch (error) {
    Logger.error(error, { event: "getAdBannersSaga" });
  }
}
