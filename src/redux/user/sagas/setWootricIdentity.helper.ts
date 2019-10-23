import { GetCurrentUser_getCurrentUser } from "@graphql/_core/schema";
import Wootric from "@services/wootric";
import { call, select } from "redux-saga/effects";
import { getUserFeatures } from "../user.selectors";

export default function* setWootricIdentity(user: GetCurrentUser_getCurrentUser) {
    const features = yield select(getUserFeatures);
    if (!features.suppressWootric) {
        yield call(Wootric.setUserProperties, { ...user.business, ...user.coinLedger, ...user });
    }
}
