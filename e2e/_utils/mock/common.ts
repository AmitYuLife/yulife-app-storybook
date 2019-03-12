import { fitKitConsentAuthorised } from "@app/redux/user/user.actions";
import { MOCK_EVENTS, mockServer } from "@mock";
import * as moment from "moment";

export const authoriseFitKit = async (): Promise<void> => {
    mockServer.emit({
        name: MOCK_EVENTS.REDUX_EVENT,
        payload: fitKitConsentAuthorised()
    });
};

export const sendSteps = async (amount = 10): Promise<void> => {
    mockServer.emit({
        name: MOCK_EVENTS.PEDOMETER_EVENT,
        payload: {
            endTime: moment().toISOString(),
            startTime: moment().subtract(30, "minutes").toISOString(),
            steps: amount
        }
    });
};

export const startWalkingSteps = async (amount = 1000, increment = 10, interval = 5000): Promise<number> => {
    return setInterval(() => {
        sendSteps(amount);
        amount = amount + increment;
    }, interval);
};
