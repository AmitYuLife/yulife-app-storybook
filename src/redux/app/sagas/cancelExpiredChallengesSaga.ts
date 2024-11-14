import { put, select, take } from "redux-saga/effects";
import { GET_USER_ACTIVE_CHALLENGE_SUCCESS, GET_USER_SUCCESS } from "@redux/user/user.actions";
import moment from "moment";
import { challengeEndAction } from "@redux/levels/levels.actions";
import { getActiveLevel } from "@redux/levels/levels.selectors";

const CANCEL_EXPIRED_CHALLENGE_SUBTYPES = ["sudoku"];
export default function* cancelExpiredChalllengeSaga() {
  yield take([GET_USER_ACTIVE_CHALLENGE_SUCCESS, GET_USER_SUCCESS]);
  const activeChallenge: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  const hasChallengeExpired =
    CANCEL_EXPIRED_CHALLENGE_SUBTYPES.includes(activeChallenge?.subtype) &&
    moment().isAfter(activeChallenge?.endDateTime);

  if (!hasChallengeExpired) {
    return;
  }

  yield put(challengeEndAction({ location: "cancelExpiredChalllengeSaga" }));
}
