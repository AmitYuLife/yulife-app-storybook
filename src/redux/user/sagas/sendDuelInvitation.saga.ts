import moment from "moment";
import { ROUTES, MODALS } from "@navigation/constants";
import { pathOr, DATE_FORMAT_WITH_TZ } from "@services/utils";
import { Navigation } from "react-native-navigation";
import { call, select, take, delay } from "redux-saga/effects";
import { UPDATE_NAVIGATION_STATE } from "../../app/app.actions";
import { getRouteState } from "../../app/app.selectors";
import { getUserSuccess } from "../user.actions";
import updateDuelWithClient from "../../../graphql/duels/updateDuel.gql";
import { querySteps } from "@services/fitkit/fitkit.helpers";
import { ChallengePayload } from "@graphql/_core/schema/globalTypes";
import { getUserFeatures } from "../user.selectors";

export default function* sendDuelInvitation({ payload }: ReturnType<typeof getUserSuccess>) {
  const currentRoute = yield select(getRouteState);
  const getCurrentUser = payload.getCurrentUser;

  const userId = getCurrentUser.id;

  const duels: typeof payload.getDuels = pathOr(payload.getDuels, []);
  const features = yield select(getUserFeatures);
  const isDuelsEnabled = features.showDuels;

  // do not show duel invite on onboarding reward screen
  if (currentRoute === ROUTES.onboardingSignUpReward) {
    yield take(UPDATE_NAVIGATION_STATE);
  }

  const whitelist = [ROUTES.dailySteps, ROUTES.quests, ROUTES.yuScreen, ROUTES.leaderboards, ROUTES.rewards];

  if (duels && duels.length > 0 && isDuelsEnabled && whitelist.includes(currentRoute)) {
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
          const scoreAggregate = yield call(querySteps, moment(user.startDateTime, DATE_FORMAT_WITH_TZ), endDateTime);
          const score = (scoreAggregate.results as ChallengePayload[]).reduce((acc, challenge) => {
            const challengeScore = challenge.value || 0;
            return acc + challengeScore;
          }, 0);
          yield call(updateDuelWithClient, id, score);
        }
      }
    }
  }
}
