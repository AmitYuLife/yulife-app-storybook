import { GetCurrentUser_getCurrentUser_leaderboards as Leaderboard } from "@graphql/_core/schema";
import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { call, select } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";

export default function* showLeaderboardInvite(leaderboards: Leaderboard[]) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

  if (leaderboards && leaderboards.length > 0 && currentRoute !== MODALS.leaderboardInvite) {
    const invitation = leaderboards.find((leaderboard) => !!leaderboard.inviteFrom);

    if (invitation) {
      yield call(() =>
        Navigation.showModal({
          component: {
            id: MODALS.leaderboardInvite,
            name: MODALS.leaderboardInvite,
            passProps: {
              leaderboardId: invitation.leaderboardId,
              inviteFrom: invitation.inviteFrom,
            },
          },
        })
      );
    }
  }
}
