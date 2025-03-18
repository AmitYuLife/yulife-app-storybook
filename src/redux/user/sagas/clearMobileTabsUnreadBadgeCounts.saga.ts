import Logger from "@services/logging/logger";
import { call, select, spawn } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { ROUTES } from "@navigation/constants";
import client from "@graphql/_core/client";
import { GetUserProfileBadgeCountQuery, gql, UserProfileBadgeCountType } from "@graphql/__generated";
import { ApolloQueryResult } from "@apollo/client";

const ROUTE_TO_BADGE_COUNT_TYPE: Partial<Record<keyof typeof ROUTES, UserProfileBadgeCountType>> = {
  [ROUTES.yuScreen]: UserProfileBadgeCountType.YuScreen,
  [ROUTES.rewards]: UserProfileBadgeCountType.Rewards,
};

export default function* clearMobileTabsUnreadBadgeCounts() {
  try {
    const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
    const unreadBadgeCountType = ROUTE_TO_BADGE_COUNT_TYPE[currentRoute as keyof typeof ROUTES];

    const { data }: ApolloQueryResult<GetUserProfileBadgeCountQuery> = yield call(() =>
      client().query({
        fetchPolicy: "cache-only",
        query: gql("GetUserProfileBadgeCountDocument"),
      })
    );

    if (unreadBadgeCountType && data?.profile?.badgeCounts?.[unreadBadgeCountType]) {
      yield call(() =>
        client().mutate({
          mutation: gql("ClearUserProfileBadgeCountDocument"),
          variables: { type: unreadBadgeCountType },
        })
      );
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "clearMobileTabsUnreadBadgeCounts" });
    });
  }
}
