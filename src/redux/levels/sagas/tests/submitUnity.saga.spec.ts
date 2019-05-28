import submitUnityChallengeWithClient from "@graphql/challenges/submitUnity.gql";
import { call, put } from "redux-saga/effects";
import { getUserStart } from "../../../user/user.actions";
import { submitUnityAction } from "../../levels.actions";
import submitUnitySaga from "../submitUnity.saga";

describe("Submit Unity Saga submitUnity", () => {

    it("submits unity and starts user", () => {
        const testSaga = submitUnitySaga({ payload: { levelId: "56" } } as ReturnType<typeof submitUnityAction>);

        const submitUnityEffect = testSaga.next();

        expect(submitUnityEffect.value).toEqual(call(submitUnityChallengeWithClient, "56"));

        const getUserStartEffect = testSaga.next();

        expect(getUserStartEffect.value).toEqual(put(getUserStart()));

        const doneEffect = testSaga.next();

        expect(doneEffect.done).toEqual(true);
    });
});
