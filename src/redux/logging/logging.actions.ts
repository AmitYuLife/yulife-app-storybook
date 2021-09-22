import { SyncAction } from "../_core/types";

export const PRODUCT_ITEM_VIEWED = "PRODUCT_ITEM_VIEWED";
export const PRODUCT_ITEM_INSPECTED = "PRODUCT_ITEM_INSPECTED";
export const LOG_EVENT_STARTED = "LOG_EVENT_STARTED";

export const logProductItemViewedActionCreator = (productId: string): SyncAction => ({
  type: PRODUCT_ITEM_VIEWED,
  payload: { productId },
});

export const logProductItemInspectedActionCreator = (productId: string): SyncAction => ({
  type: PRODUCT_ITEM_INSPECTED,
  payload: { productId },
});

export const logMixpanelEventActionCreator = (
  eventName: string,
  data: Record<string, string | number | boolean> = {}
) => ({
  type: LOG_EVENT_STARTED,
  payload: { eventName, data },
});
