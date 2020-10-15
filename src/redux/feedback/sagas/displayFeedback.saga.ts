import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { select, call, delay } from "redux-saga/effects";
import { getUserFeatures } from "@redux/user/user.selectors";
import { pendingFeedbackFormQuery } from "@graphql/member";
import { Unpacked } from "../../../services/utils";

export default function* displayFeedbackSaga() {
  const features = yield select(getUserFeatures);
  const areFeedbackScreensEnabled = !features.hideFeedbackModal;

  if (!areFeedbackScreensEnabled) {
    return;
  }

  // wait 5 seconds before querying for feedback
  yield delay(5000);

  try {
    const result: Unpacked<typeof pendingFeedbackFormQuery> = yield call(pendingFeedbackFormQuery);

    if (result?.data?.pendingFeedbackForm) {
      yield call(() => {
        Navigation.showModal({
          component: {
            id: MODALS.feedback,
            name: MODALS.feedback,
          },
        });
      });
    }
  } catch (e) {
    // fail silently, bad network. Will try again next app load
  }
}
