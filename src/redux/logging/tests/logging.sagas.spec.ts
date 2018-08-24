import { call } from "redux-saga/effects";
import { logDailyStepsCoinClickedSaga } from "../logging.sagas";
import Logger from "../../../services/logging/logger";

describe("Logging Sagas", () => {

    it("sends a log message when the coin is clicked on the daily steps page", () => {

        const testSaga = logDailyStepsCoinClickedSaga();

        let next = testSaga.next();
        expect(next.value).toEqual(call(Logger.logMixpanelEvent, "user_action", { action_type: "coin_pressed" }));
        expect(next.done).toEqual(false);

        next = testSaga.next();
        expect(next.done).toEqual(true);
    });
});
