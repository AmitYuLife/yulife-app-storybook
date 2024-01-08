import { MODALS, ROUTES } from "@navigation/constants";
import { call, delay, select, take } from "redux-saga/effects";
import { Unpacked } from "@utils";
import { showAppReviewModal, showYuModal } from "@navigation/root";
import { getUserNotification } from "@redux/user/user.selectors";
import { getModalState, getRouteState } from "@redux/app/app.selectors";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { SUPPORTED_TYPES } from "@graphql/member";

const BLACKLISTED_MODALS = [MODALS.feedback, MODALS.appReview];
const BLACKLISTED_ROUTES = [ROUTES.journey, ROUTES.sudokuGame];

const getPendingFeedback = () =>
  client().query({
    query: gql(`GetPendingUserFeedbackDocument`),
    fetchPolicy: "network-only", // needed for the cache
    variables: { supportedTypes: SUPPORTED_TYPES as any },
  });

export default function* displayPromptsSaga() {
  const userNotification: ReturnType<typeof getUserNotification> = yield select(getUserNotification);
  const modal: ReturnType<typeof getModalState> = yield select(getModalState);
  const route: ReturnType<typeof getRouteState> = yield select(getRouteState);

  if (!userNotification.hasPendingForm && !userNotification.hasAppReview) {
    return;
  }

  if (BLACKLISTED_MODALS.includes(modal) || BLACKLISTED_ROUTES.includes(route)) {
    return;
  }

  try {
    const { data }: Unpacked<typeof getPendingFeedback> = yield call(getPendingFeedback);

    if (data?.pendingAppStoreReview) {
      if (data.pendingAppStoreReview.showAfterEvent) {
        yield take(data?.pendingAppStoreReview.showAfterEvent);
      }

      yield delay(data?.pendingAppStoreReview.showAfterSeconds * 1000);
      yield call(() => showAppReviewModal(data.pendingAppStoreReview));

      return;
    }

    if (data?.pendingMobileUserJourney) {
      // wait before pushing the journey
      yield delay(data.pendingMobileUserJourney.delay || 5000);
      yield call(() =>
        Navigation.push(route, {
          component: {
            id: ROUTES.journey,
            name: ROUTES.journey,
            passProps: {
              journeyId: data.pendingMobileUserJourney.journeyId,
            },
          },
        })
      );

      return;
    }

    if (data?.pendingFeedbackForm) {
      // wait 5 seconds before displaying feedback form
      yield delay(5000);

      yield call(() => {
        showYuModal({
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
