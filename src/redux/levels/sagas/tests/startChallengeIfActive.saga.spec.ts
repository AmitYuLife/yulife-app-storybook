import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "../../levels.selectors";
import startChallenge from "../startChallenge.helper";
import startChallengeIfActiveSaga from "../startChallengeIfActive.saga";

describe("Start Challenge If Active Saga startChallengeIfActive", () => {

    it("starts meditation challenge if active", () => {
        const challengeInfo = {
            endDateTime: "",
            levelSlotId: 6,
            startDateTime: "start",
            status: "",
            subtype: "meditation",
            timeUp: false
        };

        const startChallengeVariables = {
            endDateTime: "",
            isMeditation: true,
            levelSlotId: 6,
            startDateTime: "start"
        };

        const testSaga = startChallengeIfActiveSaga();

        const getActiveEffect = testSaga.next();

        expect(getActiveEffect.value).toEqual(select(getActiveLevel));

        const startChallengeEffect = testSaga.next(challengeInfo);

        expect(startChallengeEffect.value).toEqual(call(startChallenge, startChallengeVariables));

        const doneEffect = testSaga.next();

        expect(doneEffect.done).toEqual(true);
    });

    it("does nothing if challenge is not active", () => {
        const challengeInfo = {
            endDateTime: "time",
            levelSlotId: 6,
            startDateTime: "start",
            status: "fail",
            subtype: "meditation",
            timeUp: true
        };

        const testSaga = startChallengeIfActiveSaga();

        const getActiveEffect = testSaga.next();

        expect(getActiveEffect.value).toEqual(select(getActiveLevel));

        const doneEffect = testSaga.next(challengeInfo);

        expect(doneEffect.done).toEqual(true);
    });
});
