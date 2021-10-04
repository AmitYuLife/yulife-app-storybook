import { GetCurrentUser_getCurrentUser_leaderboards as Leaderboard } from "@graphql/_core/schema";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { call, select } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";

export default function* showLeaderboardInvite(leaderboards: Leaderboard[]) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

  if (leaderboards && leaderboards.length > 0 && currentRoute !== MODALS.leaderboardInvite) {
    const invitation = leaderboards.find((leaderboard) => !!leaderboard.inviteFrom);

    if (invitation) {
      yield call(() =>
        showYuModal({
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
