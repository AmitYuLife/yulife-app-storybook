import { select, put } from "redux-saga/effects";
import { displayFeedbackOnNextLoadAction, handleFeedbackAction } from "../feedback.actions";
import { Metric } from "@graphql/_core/schema/globalTypes";
import { getChallengesDone } from "@redux/levels/levels.selectors";

export default function* handleFeedbackSaga({ payload }: ReturnType<typeof handleFeedbackAction>) {
  const challengesDone = yield select(getChallengesDone);

  const { level } = payload;

  if (challengesDone === 0) {
    if (level === 1) {
      yield put(displayFeedbackOnNextLoadAction({ display: true, metric: Metric.CES }));
    } else if (level === 10 || level % 50 === 1) {
      // display nps on levels 51, 101, 151 etc
      yield put(displayFeedbackOnNextLoadAction({ display: true, metric: Metric.NPS }));
    }
  }
}
