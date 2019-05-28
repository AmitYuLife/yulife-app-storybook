import { call } from "redux-saga/effects";
import { challengeStartSuccessAction } from "../../levels.actions";
import { startChallengePayload } from "../../tests/levels.fixtures";
import startChallenge from "../startChallenge.helper";
import startChallengeSuccessSaga from "../startChallengeSuccess.saga";

describe("Start Challenge Success Saga startChallengeSuccess", () => {

    it("starts challenge", () => {
        const testSaga = startChallengeSuccessSaga({
            payload: startChallengePayload
        } as ReturnType<typeof challengeStartSuccessAction>);

        const startChallengeEffect = testSaga.next();

        const challageData = {
            endDateTime: startChallengePayload.createActiveChallenge.challenge.endDateTime,
            isMeditation: startChallengePayload.createActiveChallenge.levelSlot.subtype === "meditation",
            levelSlotId: startChallengePayload.levelSlotId,
            startDateTime: startChallengePayload.createActiveChallenge.challenge.startDateTime
        };

        expect(startChallengeEffect.value).toEqual(call(startChallenge as any, challageData ));

        const doneEffect = testSaga.next();

        expect(doneEffect.done).toEqual(true);
    });
});
