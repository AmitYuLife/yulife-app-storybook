import { ApolloQueryResult } from "apollo-client";
import moment from "moment";
import { ROUTES, MODALS } from "@navigation/constants";
import { DATE_FORMAT_WITH_TZ } from "@services/utils";
import { Navigation } from "react-native-navigation";
import { call, select, take, delay } from "redux-saga/effects";
import { UPDATE_NAVIGATION_STATE } from "../../app/app.actions";
import { getRouteState } from "../../app/app.selectors";
import updateDuelWithClient from "../../../graphql/duels/updateDuel.gql";
import { getUserFeatures, getCurrentUserId } from "../user.selectors";
import getDuelsWithClient from "@graphql/duels/getDuels.gql";
import { GetDuels } from "@graphql/_core/schema";

export default function* sendDuelInvitation() {
  const currentRoute = yield select(getRouteState);
  const userId = yield select(getCurrentUserId);
  const features = yield select(getUserFeatures);

  const isDuelsEnabled = features.showDuels;

  const { data }: ApolloQueryResult<GetDuels> = yield call(getDuelsWithClient);

  const duels = data?.getDuels || [];

  // do not show duel invite on onboarding reward screen
  if (currentRoute === ROUTES.onboardingSignUpReward) {
    yield take(UPDATE_NAVIGATION_STATE);
  }

  const whitelist = [ROUTES.dailySteps, ROUTES.quests, ROUTES.yuScreen, ROUTES.leaderboards, ROUTES.rewards];

  if (duels.length && isDuelsEnabled && whitelist.includes(currentRoute)) {
    const invitation = duels.find((duel) => {
      const invitee = duel.opponents[1];
      return duel.status === "pending" && invitee.userId === userId && invitee.status === "pending";
    });

    if (invitation) {
      yield delay(1000);
      yield call(() =>
        Navigation.showModal({
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

    for (const { id, status, opponents, duration } of duels) {
      if (status === "accepted" || status === "pending_submission") {
        const userIndex = opponents.findIndex((opponent) => opponent.userId === userId);
        const user = opponents[userIndex];

        const now = moment();
        const endDateTime = moment(user.startDateTime, DATE_FORMAT_WITH_TZ).add(duration, "seconds");

        if (now.isAfter(endDateTime)) {
          yield call(updateDuelWithClient, id);
        }
      }
    }
  }
}
