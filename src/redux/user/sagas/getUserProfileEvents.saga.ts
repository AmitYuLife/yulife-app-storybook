import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { updateUserProfileEvents, updateUserProfileHeroCards } from "@redux/user/user.actions";
import client from "@graphql/_core/client";
import { GetMobileHeroCardsQuery, GetUserProfileEventsQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";
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
    const { data: heroCardsData }: QueryResult<GetMobileHeroCardsQuery> = yield call(() =>
      client().query({ query: gql("GetMobileHeroCardsDocument"), fetchPolicy: "no-cache" })
    );

    if (heroCardsData?.getMobileHeroCards) {
      yield put(updateUserProfileHeroCards(heroCardsData?.getMobileHeroCards.map(mapHeroCard)));
    }

    // Even if we have hero cards, we still need to fetch events, because they are used in the showEventFinishDialog saga
    const { data: userProfileEventsData }: QueryResult<GetUserProfileEventsQuery> = yield call(() =>
      client().query({ query: gql("GetUserProfileEventsDocument"), fetchPolicy: "network-only" })
    );

    if (userProfileEventsData?.getUserProfileEvents) {
      yield put(updateUserProfileEvents(userProfileEventsData?.getUserProfileEvents));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getUserProfileEventsData" });
    });
  }
}
