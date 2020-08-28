import { call, select } from "redux-saga/effects";
import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { FeedbackModalProps, cesModalProps, npsModalProps } from "@components/modals/feedback/feedback.modal";
import { handleFeedbackAction } from "../levels.actions";
import { getChallengesStatus } from "../levels.selectors";

export default function* handleFeedbackSaga({ payload }: ReturnType<typeof handleFeedbackAction>) {
  const { hasDone } = yield select(getChallengesStatus);

  if (!hasDone) {
    yield call(handleFeedback, payload.level);
  }
}

function openFeedbackModal(formType: "CES" | "NPS") {
  const props = formType === "CES" ? cesModalProps : npsModalProps;

  Navigation.showModal<FeedbackModalProps>({
    component: {
      id: MODALS.feedback,
      name: MODALS.feedback,
      passProps: props,
    },
  });
}

function handleFeedback(level: number) {
  if (level === 1) {
    return openFeedbackModal("CES");
  }

  // display nps on levels 51, 101, 151 etc
  if (level === 10 || level % 50 === 1) {
    return openFeedbackModal("NPS");
  }
}
