import { ApolloQueryResult } from "@apollo/client";
import { ROUTES, MODALS } from "@navigation/constants";
import { call, select, take, delay } from "redux-saga/effects";
import { UPDATE_CURRENT_ROUTE } from "../../app/app.actions";
import { getModalState, getRouteState } from "../../app/app.selectors";
import { getUserFeatures, getCurrentUserId } from "../user.selectors";
import getDuelsWithClient from "@graphql/duels/getDuels.gql";
import { GetDuels } from "@graphql/_core/schema";
import { showYuModal } from "@navigation/root";
import { getUserNotification } from "@redux/user/user.selectors";

export default function* sendDuelInvitation() {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const currentModal: ReturnType<typeof getRouteState> = yield select(getModalState);
  const userId: ReturnType<typeof getCurrentUserId> = yield select(getCurrentUserId);
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  const userNotification: ReturnType<typeof getUserNotification> = yield select(getUserNotification);

  const isDuelsEnabled = features.showDuels;

  if (!userNotification.hasDuels) {
    return;
  }

  const { data }: ApolloQueryResult<GetDuels> = yield call(getDuelsWithClient);

  const duels = data?.getDuels || [];

  // do not show duel invite on onboarding reward screen
  if (currentRoute === ROUTES.onboardingSignUpReward) {
    yield take(UPDATE_CURRENT_ROUTE);
  }

  const whitelist = [ROUTES.dailySteps, ROUTES.quests, ROUTES.yuScreen, ROUTES.leaderboardsLegacy, ROUTES.rewards];

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
