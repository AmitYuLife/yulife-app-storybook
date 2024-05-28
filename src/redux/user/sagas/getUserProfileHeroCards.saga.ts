import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { updateUserProfileHeroCards } from "@redux/user/user.actions";
import client from "@graphql/_core/client";
import { gql, GetMobileHeroCardsQuery } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";
import { mapHeroCard } from "@utils/heroCards";

export default function* getUserProfileHeroCards() {
  try {
    const { data }: QueryResult<GetMobileHeroCardsQuery> = yield call(() =>
      client().query({ query: gql("GetMobileHeroCardsDocument"), fetchPolicy: "no-cache" })
    );

    if (data?.getMobileHeroCards) {
      yield put(updateUserProfileHeroCards(data?.getMobileHeroCards.map(mapHeroCard)));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getUserProfileHeroCards" });
    });
  }
}
