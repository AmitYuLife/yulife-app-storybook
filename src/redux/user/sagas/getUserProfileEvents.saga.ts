import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import { updateUserProfileHeroCards } from "@redux/user/user.actions";
import client from "@graphql/_core/client";
import { GetMobileHeroCardsQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";
import { mapHeroCard } from "@utils/heroCards";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";

export default function* getUserProfileEventsData() {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const { data: heroCardsData }: QueryResult<GetMobileHeroCardsQuery> = yield call(() =>
      client().query({ query: gql("GetMobileHeroCardsDocument"), fetchPolicy: "network-only" })
    );

    if (heroCardsData?.getMobileHeroCards) {
      yield put(updateUserProfileHeroCards(heroCardsData?.getMobileHeroCards.map(mapHeroCard)));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "getUserProfileEventsData" });
    });
  }
}
