import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { Navigation } from "react-native-navigation";
import { call, put, select } from "redux-saga/effects";
import { challengeResetSuccessAction } from "../levels.actions";
import { getActiveLevel, getChallengesStatus, IActiveLevel } from "../levels.selectors";

export default function* resetChallengeSaga() {
  const { done }: ReturnType<typeof getChallengesStatus> = yield select(getChallengesStatus);
  const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  if (done < 1 && active.chest.value > 0 && active.status === "success") {
    yield call(showModal, active);
  }

  yield put(challengeResetSuccessAction());
}

export function showModal(active: IActiveLevel) {
  showYuModal({
    component: {
      id: MODALS.chest,
      name: MODALS.chest,
      passProps: {
        ctaLabel: "collect",
        heading: `you get ${active.chest.value} yucoin`,
        isLocked: false,
        onPressCta: () => {
          Navigation.dismissModal(MODALS.chest);
        },
      },
    },
  });
}
