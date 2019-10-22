import { GetCurrentUser_getCurrentUser } from "@graphql/_core/schema";
import Wootric from "@services/wootric";
import { call } from "redux-saga/effects";

export default function* setWootricIdentity(user: GetCurrentUser_getCurrentUser) {
    yield call(Wootric.setUserProperties, { ...user.business, ...user.coinLedger, ...user });
}
