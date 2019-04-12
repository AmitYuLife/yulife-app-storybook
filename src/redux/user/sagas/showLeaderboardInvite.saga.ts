import { MODALS } from "@navigation/constants";
import { pathOr } from "@services/utils";
import { Navigation } from "react-native-navigation";
import { call, select } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { getUserSuccess } from "../user.actions";

export default function* showLeaderboardInviteSaga({ payload }: ReturnType<typeof getUserSuccess>) {
    const leaderboards: typeof payload.getCurrentUser.leaderboards = pathOr(payload.getCurrentUser.leaderboards, []);
    const currentRoute = yield select(getRouteState);

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
                            inviteFrom: invitation.inviteFrom
                        }
                    }
                })
            );
        }
    }
}
