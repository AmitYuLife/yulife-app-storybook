import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { call, delay, take } from "redux-saga/effects";
import { pendingFeedbackFormQuery } from "@graphql/member";
import { Unpacked } from "@services/utils";
import { showAppReviewModal } from "@navigation/root";

export default function* displayPromptsSaga() {
  try {
    const result: Unpacked<typeof pendingFeedbackFormQuery> = yield call(pendingFeedbackFormQuery);

    if (result?.data?.pendingAppStoreReview) {
      if (result.data.pendingAppStoreReview.showAfterEvent) {
        yield take(result?.data?.pendingAppStoreReview.showAfterEvent);
      }

      yield delay(result?.data?.pendingAppStoreReview.showAfterSeconds * 1000);
      yield call(() => showAppReviewModal());

      return;
    }

    if (result?.data?.pendingFeedbackForm) {
      // wait 5 seconds before displaying feedback form
      yield delay(5000);

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
