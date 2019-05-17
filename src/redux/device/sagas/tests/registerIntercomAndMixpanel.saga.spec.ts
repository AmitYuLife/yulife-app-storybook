import { compareSagaActionsWithNoVisualDifference } from "jest/tests-utils";
import Intercom from "react-native-intercom";
import Mixpanel from "react-native-mixpanel";
import { spawn } from "redux-saga/effects";
import { addDeviceToken } from "../../device.actions";
import registerIntercomAndMixpanelSaga from "../registerIntercomAndMixpanel.saga";

describe("Register Intercom And Mixpanel Saga", () => {
    it("add device token to Intercom and Mixpanel", () => {
        const mock: ReturnType<typeof addDeviceToken> = {
            payload: {
                deviceId: "string",
                deviceToken: "token",
                os: "string"
            },
            type: ""
        };

        const testSaga = registerIntercomAndMixpanelSaga(mock);

        let actual: any = testSaga.next(mock);
        let expected: any = spawn(() => Mixpanel.addPushDeviceToken(mock.payload.deviceToken));

        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expected = spawn(() => Intercom.sendTokenToIntercom(mock.payload.deviceToken));

        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});
