import { IntercomHashMethod } from "@graphql/_core/schema";
import getSession from "@graphql/user/getSession.gql";
import refreshSession from "@graphql/user/refreshSession.gql";
import { TOKEN_EXPIRATION } from "@services/constants";
import logger from "@services/logging/logger";
import { clearToken, setToken } from "@services/storage";
import { ExecutionResult } from "graphql";
import moment from "moment";
import { Platform } from "react-native";
import { call, takeLatest } from "redux-saga/effects";

export function* checkTokenExpiry() {
    const session = yield call(getSession);

    if (session.errors && session.errors.length) {
        yield call(() => logger.logMixpanelError("error trying to get user session", session.errors));
        return;
    }

    const isExpired = moment().isAfter(moment.unix(session.data.expires));
    const needsRefreshing = !isExpired && moment().add(14, "days").isAfter(moment.unix(session.data.expires));

    if (isExpired) {
        yield call(clearToken);
        return;
    }

    if (needsRefreshing) {
        const result: ExecutionResult = yield call(refreshSession, {
            tokenExpiration: TOKEN_EXPIRATION,
            intercomHashMethod: Platform.OS as IntercomHashMethod
          });

        if (result.errors && result.errors.length) {
            yield call(() => logger.logMixpanelError("error trying to refresh session", result.errors));
            return;
        }

        if (result.data.refreshSession.token) {
            yield call(setToken, result.data.refreshSession.token);
        }
    }
}

export default [
    takeLatest("INIT", checkTokenExpiry)
];
