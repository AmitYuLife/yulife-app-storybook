import Config from "react-native-config";
import TestFairy from "react-native-testfairy";
import { call } from "redux-saga/effects";

export default function* setTestFairyId(id: string) {
    if (Config.TESTFAIRY_ENABLED === "yes") {
        yield call(TestFairy.setUserId, id);
    }
}
