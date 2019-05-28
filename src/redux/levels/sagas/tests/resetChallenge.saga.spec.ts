import { call, put, select } from "redux-saga/effects";
import { challengeResetSuccessAction } from "../../levels.actions";
import { getActiveLevel, getChallengesStatus } from "../../levels.selectors";
import resetChallengeSaga, { showModal } from "../resetChallenge.saga";

describe("Reset Challenge Saga resetChallenge", () => {
    const challengeComplete = { done: 0 };
    const challengeIncomplete = { done: 1 };

    const challengeSuccessWithCoins = { chest: { value: 5 }, status: "success" };
    const challengeFail = { chest: { value: 0 }, status: "fail" };

    it("shows the collect reward modal if the challenge is completed", () => {
        const testSaga = resetChallengeSaga();

        const challengeStatusEffect = testSaga.next();
        expect(challengeStatusEffect.value).toEqual(select(getChallengesStatus));

        const getActiveEffect = testSaga.next(challengeComplete);
        expect(getActiveEffect.value).toEqual(select(getActiveLevel));

        const showModalEffect = testSaga.next(challengeSuccessWithCoins);
        expect(showModalEffect.value).toEqual(call(showModal, challengeSuccessWithCoins));

        const challengeSuccessActionEffect = testSaga.next();
        expect(challengeSuccessActionEffect.value).toEqual(put(challengeResetSuccessAction()));

        const doneEffect =  testSaga.next();

        expect(doneEffect.done).toEqual(true);
    });

    it("does nothing if the challenge is not completed", () => {
        const testSaga = resetChallengeSaga();

        const challengeStatusEffect = testSaga.next();
        expect(challengeStatusEffect.value).toEqual(select(getChallengesStatus));

        const getActiveEffect = testSaga.next(challengeIncomplete);
        expect(getActiveEffect.value).toEqual(select(getActiveLevel));

        const challengeSuccessActionEffect = testSaga.next(null);
        expect(challengeSuccessActionEffect.value).toEqual(put(challengeResetSuccessAction()));

        const doneEffect = testSaga.next();
        expect(doneEffect.done).toEqual(true);
    });

    it("does nothing if the challenge was not successful", () => {
        const testSaga = resetChallengeSaga();

        const challengeStatusEffect = testSaga.next();
        expect(challengeStatusEffect.value).toEqual(select(getChallengesStatus));

        const getActiveEffect = testSaga.next(challengeComplete);
        expect(getActiveEffect.value).toEqual(select(getActiveLevel));

        const challengeFailActionEffect = testSaga.next(challengeFail);
        expect(challengeFailActionEffect.value).toEqual(put(challengeResetSuccessAction()));

        const doneEffect = testSaga.next();
        expect(doneEffect.done).toEqual(true);
    });
});
