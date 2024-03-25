import { select, takeLeading } from "redux-saga/effects";
import {
  CHALLENGE_CANCEL_SUCCESS,
  CHALLENGE_END_FAIL,
  CHALLENGE_END_SUCCESS,
  CHALLENGE_RESET_FAIL,
  CHALLENGE_RESET_SUCCESS,
  CHALLENGE_START_SUCCESS,
} from "@redux/levels/levels.actions";
import yuWatchRefetchActiveChallengeSaga from "./yuWatchRefetchActiveChallenge.saga";
import { IFeature } from "@redux/user/user.types";
import { getUserFeatures } from "@redux/user/user.selectors";
import { isAndroid } from "@utils";

export default [
  takeLeading(
    [
      CHALLENGE_START_SUCCESS,
      CHALLENGE_CANCEL_SUCCESS,
      CHALLENGE_RESET_FAIL,
      CHALLENGE_RESET_SUCCESS,
      CHALLENGE_END_FAIL,
      CHALLENGE_END_SUCCESS,
    ],
    yuWatchFeatureGuard(yuWatchRefetchActiveChallengeSaga)
  ),
];

// Allows use of 'Function':
// eslint-disable-next-line @typescript-eslint/ban-types
function yuWatchFeatureGuard<T extends Function>(saga: T) {
  return function* yuWatchFeatureGuardSaga(...args: T extends (...args: infer A) => unknown ? A : never) {
    const features: IFeature = yield select(getUserFeatures);
    if (!features.tempGameEnableYuWatch || isAndroid()) {
      return;
    }

    yield* saga(...args);
  };
}
