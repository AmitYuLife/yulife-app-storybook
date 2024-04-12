import { ApolloQueryResult } from "@apollo/client";
import { ROUTES, MODALS } from "@navigation/constants";
import { call, select, take, delay } from "redux-saga/effects";
import { UPDATE_CURRENT_ROUTE } from "../../app/app.actions";
import { getModalState, getRouteState } from "../../app/app.selectors";
import { getUserFeatures, getCurrentUserId } from "../user.selectors";
import { showYuModal } from "@navigation/root";
import { getUserNotification } from "@redux/user/user.selectors";
import client from "@graphql/_core/client";
import { GetDuelsQuery, gql } from "@graphql/__generated";

export default function* showDuelRespondModalSaga() {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const currentModal: ReturnType<typeof getRouteState> = yield select(getModalState);
  const userId: ReturnType<typeof getCurrentUserId> = yield select(getCurrentUserId);
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  const userNotification: ReturnType<typeof getUserNotification> = yield select(getUserNotification);

  const isDuelsEnabled = features.showDuels;

  if (!userNotification.hasDuels) {
    return;
  }

  const { data }: ApolloQueryResult<GetDuelsQuery> = yield call(() =>
    client().query({
      fetchPolicy: "network-only",
      query: gql("GetDuelsDocument"),
    })
  );

  const duels = data?.getDuels || [];

  // do not show duel invite on onboarding reward screen
  if (currentRoute === ROUTES.onboardingSignUpReward) {
    yield take(UPDATE_CURRENT_ROUTE);
  }

  const whitelist = [ROUTES.dailySteps, ROUTES.quests, ROUTES.yuScreen, ROUTES.leaderboard, ROUTES.rewards];

  if (duels.length && isDuelsEnabled && whitelist.includes(currentRoute) && !currentModal) {
    const invitation = duels.find((duel) => {
      const invitee = duel.opponents[1];
      return duel.status === "pending" && invitee.userId === userId && invitee.status === "pending";
    });

    if (invitation) {
      yield delay(1000);
      yield call(() =>
        showYuModal({
          component: {
            id: MODALS.duelRespond,
            name: MODALS.duelRespond,
            passProps: {
              invitation,
              duelId: invitation.id,
            },
          },
        })
      );
    }
  }
}
