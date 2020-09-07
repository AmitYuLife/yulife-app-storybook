import { FeedbackModalProps, cesModalProps, npsModalProps } from "@components/modals/feedback/feedback.modal";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";

import { getFeedback } from "../feedback.selectors";
import { select, call, put } from "redux-saga/effects";
import { displayFeedbackSuccessAction } from "../feedback.actions";
import { getUserFeatures } from "@redux/user/user.selectors";

export default function* displayFeedbackSaga() {
  const feedback = yield select(getFeedback);

  const features = yield select(getUserFeatures);

  const areFeedbackScreensEnabled = !features.hideFeedbackModal;

  if (feedback.display && areFeedbackScreensEnabled) {
    yield call(openFeedbackModal, feedback.metric);
    yield put(displayFeedbackSuccessAction());
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
