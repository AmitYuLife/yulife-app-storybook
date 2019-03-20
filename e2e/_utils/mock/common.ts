import { fitKitConsentAuthorised } from "@app/redux/user/user.actions";
import { MOCK_EVENTS, mockServer } from "@mock";
import * as moment from "moment";

export const authoriseFitKit = async (): Promise<void> => {
    mockServer.emit({
        name: MOCK_EVENTS.FITKIT_AUTHORISED,
        payload: null
    });
};

export const sendSteps = (amount = 10) => async (): Promise<void> => {
    mockServer.emit({
        name: MOCK_EVENTS.PEDOMETER_EVENT,
        payload: {
            endTime: moment().toISOString(),
            startTime: moment().subtract(30, "minutes").toISOString(),
            steps: amount
        }
    });
};

export const startWalkingSteps = (amount = 1000, increment = 10, interval = 5000) => async (): Promise<number> => {
    return setInterval(() => {
        sendSteps(amount)();
        amount = amount + increment;
    }, interval);
};
