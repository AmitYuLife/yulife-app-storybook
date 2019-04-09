import getMagicLinkWithClient from "@graphql/user/getMagicLink.gql";
import Logger from "@services/logging/logger";
import { Linking } from "react-native";
import { call, spawn } from "redux-saga/effects";

export default function* openMemberZoneSaga() {
    try {
        const { data } = yield call(getMagicLinkWithClient);
        yield call(() => Linking.openURL(data.getMagicLink));
    } catch (e) {
        yield spawn(() => Logger.logMixpanelError(e, "openMemberZone"));
    }
}
