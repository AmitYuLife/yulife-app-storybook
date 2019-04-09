import { call } from "redux-saga/effects";
import { challengeStartSuccessAction } from "../levels.actions";
import startChallenge from "./startChallenge.helper";

export default function* startChallengeSuccessSaga({ payload }: ReturnType<typeof challengeStartSuccessAction>) {
    const {
        createActiveChallenge: {
            challenge: { startDateTime, endDateTime },
            levelSlot: { subtype }
        },
        levelSlotId
    } = payload;

    if (startDateTime && endDateTime && subtype) {
        yield call(startChallenge, {
            endDateTime,
            isMeditation: subtype === "meditation",
            levelSlotId,
            startDateTime
        });
    }
}
