import { call, takeEvery } from "redux-saga/effects";
import Logger from "../../services/logging/logger";
import {
  PRODUCT_ITEM_VIEWED,
  PRODUCT_ITEM_INSPECTED,
  logProductItemViewedActionCreator,
  logProductItemInspectedActionCreator,
} from "./logging.actions";

export function* logProductItemInspected({ payload }: ReturnType<typeof logProductItemInspectedActionCreator>) {
  yield call(Logger.logMixpanelEvent, "user_action", {
    action_type: "product_item_inspected",
    productId: payload.productId,
  });
}

export function* logProductItemViewed({ payload }: ReturnType<typeof logProductItemViewedActionCreator>) {
  yield call(Logger.logMixpanelEvent, "user_action", {
    action_type: "product_item_viewed",
    productId: payload.productId,
  });
}

export default [
  takeEvery(PRODUCT_ITEM_VIEWED, logProductItemViewed),
  takeEvery(PRODUCT_ITEM_INSPECTED, logProductItemInspected),
];
