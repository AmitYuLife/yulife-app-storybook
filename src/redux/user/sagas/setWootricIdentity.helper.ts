import { GetCurrentUser_getCurrentUser } from "@graphql/_core/schema";
import Wootric from "@services/wootric";
import { call, select } from "redux-saga/effects";
import { getUserFeatures, hasBusinessLeaderboardConsent } from "../user.selectors";

export default function* setWootricIdentity(user: GetCurrentUser_getCurrentUser) {
    const features = yield select(getUserFeatures);
    if (!features.suppressWootric) {
        const hasBusinessLeaderboard = yield select(hasBusinessLeaderboardConsent);
        yield call(Wootric.setUserProperties, {
            ...user.business,
            ...user.coinLedger,
            ...user,
            hasBusinessLeaderboard
        });
    }
}
