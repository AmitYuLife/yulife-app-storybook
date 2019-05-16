import getMobileCopy from "@graphql/copy/getMobileCopy.gql";
import Logger from "@services/logging/logger";
import { call, put, select, spawn } from "redux-saga/effects";
import { updateCopy } from "../copy.actions";
import { getCopyVersion } from "../copy.selectors";

export default function* updateCopySaga() {
    try {
        const { data } = yield call(getMobileCopy);

        if (data && data.getMobileCopy) {
            const currentVersion = yield select(getCopyVersion);

            if (data.getMobileCopy.version !== currentVersion) {
                yield put(updateCopy(data));
            }
        }
    } catch (e) {
        yield spawn(() => Logger.logMixpanelError(e, "updateCopySaga"));
    }
}
