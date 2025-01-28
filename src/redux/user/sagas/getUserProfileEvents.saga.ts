import { call, put, select, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { updateUserProfileEvents, updateUserProfileHeroCards } from "@redux/user/user.actions";
import client from "@graphql/_core/client";
import { GetMobileHeroCardsQuery, GetUserProfileEventsQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";
import { getUserFeatures } from "../user.selectors";
import { mapHeroCard } from "@utils/heroCards";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";

// for now, to keep the our refactor smaller, we will use the same saga to fetch both hero cards and events
export default function* getUserProfileEventsData() {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    const hasHeroCards = !!features.tempEnableDailyHeroCardsV2;

    if (hasHeroCards) {
      const { data }: QueryResult<GetMobileHeroCardsQuery> = yield call(() =>
        client().query({ query: gql("GetMobileHeroCardsDocument"), fetchPolicy: "no-cache" })
      );

      if (data?.getMobileHeroCards) {
        yield put(updateUserProfileHeroCards(data?.getMobileHeroCards.map(mapHeroCard)));
      }
    }

    // Even if we have hero cards, we still need to fetch events, because they are used in the showEventFinishDialog saga
    const { data }: QueryResult<GetUserProfileEventsQuery> = yield call(() =>
      client().query({ query: gql("GetUserProfileEventsDocument"), fetchPolicy: "network-only" })
    );

    if (data?.getUserProfileEvents) {
      yield put(updateUserProfileEvents(data?.getUserProfileEvents));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getUserProfileEventsData" });
    });
  }
}
