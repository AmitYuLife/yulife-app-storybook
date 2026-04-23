import { call, takeEvery } from "redux-saga/effects";
import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import {
  PRODUCT_ITEM_VIEWED,
  PRODUCT_ITEM_INSPECTED,
  logProductItemViewedActionCreator,
  logProductItemInspectedActionCreator,
  logMixpanelEventActionCreator,
  logErrorActionCreator,
  LOG_EVENT_STARTED,
  LOG_ERROR_STARTED,
} from "./logging.actions";

export function* logProductItemInspected({ payload }: ReturnType<typeof logProductItemInspectedActionCreator>) {
  yield call(EngagementTracking.logMixpanelEvent, "user_action", {
    action_type: "product_item_inspected",
    productId: payload.productId,
  });
}

export function* logProductItemViewed({ payload }: ReturnType<typeof logProductItemViewedActionCreator>) {
  yield call(EngagementTracking.logMixpanelEvent, "user_action", {
    action_type: "product_item_viewed",
    productId: payload.productId,
  });
}

export function* logMixpanelEvent({ payload }: ReturnType<typeof logMixpanelEventActionCreator>) {
  yield call(EngagementTracking.logMixpanelEvent, payload.eventName, payload.data);
}

export function* logErrorEvent({ payload }: ReturnType<typeof logErrorActionCreator>) {
  yield call(Logger.error, payload.error, payload.data);
}

export default [
  takeEvery(PRODUCT_ITEM_VIEWED, logProductItemViewed),
  takeEvery(PRODUCT_ITEM_INSPECTED, logProductItemInspected),
  takeEvery(LOG_EVENT_STARTED, logMixpanelEvent),
  takeEvery(LOG_ERROR_STARTED, logErrorEvent),
];
