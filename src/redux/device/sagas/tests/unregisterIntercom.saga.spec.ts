import { compareSagaActionsWithNoVisualDifference } from "jest/tests-utils";
import Intercom from "react-native-intercom";
import { call } from "redux-saga/effects";
import unregisterIntercomSaga from "../unregisterIntercom.saga";
describe("Intercome Saga unregisterIntercomSaga", () => {
    it("reset Intercom", () => {
        const testSaga = unregisterIntercomSaga();

        let actual: any = testSaga.next();
        const expected = call(() => Intercom.logout());
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});
