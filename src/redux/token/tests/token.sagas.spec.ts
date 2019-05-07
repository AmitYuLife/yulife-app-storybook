import { IntercomHashMethod } from "@graphql/_core/schema";
import getSession from "@graphql/user/getSession.gql";
import refreshSession from "@graphql/user/refreshSession.gql";
import { TOKEN_EXPIRATION } from "@services/constants";
import { clearToken, setToken } from "@services/storage";
import moment from "moment";
import { Platform } from "react-native";
import { call } from "redux-saga/effects";
import { checkTokenExpiry } from "../token.sagas";

const TOKEN = "abc";

describe("Token Saga checkTokenExpiry", () => {

    it("does nothing if token is does not need refreshing", () => {
        const testSaga = checkTokenExpiry();

        const getSessionEffect = testSaga.next();

        expect(getSessionEffect.value).toEqual(call(getSession));

        const doneEffect = testSaga.next({ data: { expires: moment().add(15, "days").unix() }});

        expect(doneEffect.done).toEqual(true);
    });

    it("clears an expired token", () => {
        const testSaga = checkTokenExpiry();

        const getSessionEffect = testSaga.next();

        expect(getSessionEffect.value).toEqual(call(getSession));

        const clearEffect = testSaga.next({ data: { expires: moment().subtract(1, "minute").unix() }});

        expect(clearEffect.value).toEqual(call(clearToken));

        const doneEffect = testSaga.next();

        expect(doneEffect.done).toEqual(true);
    });

    it("calls refresh if token is nearly expired", () => {
        const testSaga = checkTokenExpiry();

        const getSessionEffect = testSaga.next();

        expect(getSessionEffect.value).toEqual(call(getSession));

        const refreshEffect = testSaga.next({ data: { expires: moment().add(13, "days").unix() }});

        expect(refreshEffect.value).toEqual(call(refreshSession, {
            intercomHashMethod: Platform.OS as IntercomHashMethod,
            tokenExpiration: TOKEN_EXPIRATION
        }));

        const setTokenEffect = testSaga.next({ data: { refreshSession: { token: TOKEN }}});

        expect(setTokenEffect.value).toEqual(call(setToken, TOKEN));

        const doneEffect = testSaga.next();

        expect(doneEffect.done).toEqual(true);
    });
});
