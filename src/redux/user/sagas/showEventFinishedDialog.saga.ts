import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { getRouteState } from "@redux/app/app.selectors";
import { all, call, select } from "redux-saga/effects";
import { getUserHeroCards } from "../user.selectors";
import { GetGoalDetailsQuery, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import { ApolloQueryResult } from "@apollo/client";
import { HeroCard, HeroCardProgressMilestoneState } from "@utils/heroCards";

function* showCompletedEvents(completedCards: HeroCard[]) {
  const activeRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

  if (activeRoute === MODALS.collectEventReward || activeRoute === ROUTES.mediaPlayer) {
    return;
  }

  const response: ApolloQueryResult<GetGoalDetailsQuery>[] = yield all(
    completedCards.map(({ id }) => {
      return call(() =>
        client().query({
          query: gql("GetGoalDetailsDocument"),
          variables: { id },
          fetchPolicy: "network-only",
        })
      );
    })
  );

  const rewards = response
    .flatMap(({ data }) => data?.getGoalDetails?.rewards ?? [])

    // ignore rewards that have a chest in them, they have to be manually claimed one by one
    .filter((r) => !r.onPress);

  if (rewards.length) {
    showYuModal({
      component: {
        id: MODALS.collectEventReward,
        name: MODALS.collectEventReward,
        passProps: {
          goalIds: completedCards.map((card) => card.id),
          event: completedCards.length === 1 ? completedCards[0].header?.heading : "",
          completed: true,
          rewards,
        },
      },
    });
  }
}

export default function* showEventFinishDialog() {
  const heroCards: HeroCard[] = yield select(getUserHeroCards);

  const completedCards = heroCards.filter((card) => {
    const progress = card.body?.progress;
    if (!progress || progress.currentProgress < progress.maxProgress) {
      return false;
    }

    return progress.milestones?.some((m) => m.state === HeroCardProgressMilestoneState.Emphasized);
  });

  if (completedCards.length) {
    yield showCompletedEvents(completedCards);
  }
}
