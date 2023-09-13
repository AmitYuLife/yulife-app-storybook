import { MixpanelEvent, MixpanelEventMetadata } from "@services/logging/types";
import { SyncAction } from "../_core/types";

export const PRODUCT_ITEM_VIEWED = "PRODUCT_ITEM_VIEWED";
export const PRODUCT_ITEM_INSPECTED = "PRODUCT_ITEM_INSPECTED";
export const LOG_EVENT_STARTED = "LOG_EVENT_STARTED";
export const LOG_ERROR_STARTED = "LOG_ERROR_STARTED";

export const logProductItemViewedActionCreator = (productId: string): SyncAction => ({
  type: PRODUCT_ITEM_VIEWED,
  payload: { productId },
});

export const logProductItemInspectedActionCreator = (productId: string): SyncAction => ({
  type: PRODUCT_ITEM_INSPECTED,
  payload: { productId },
});

export const logMixpanelEventActionCreator = (eventName: MixpanelEvent, data: MixpanelEventMetadata = {}) => ({
  type: LOG_EVENT_STARTED,
  payload: { eventName, data },
});

export const logErrorActionCreator = (error: Error, data: Record<string, string | number | boolean> = {}) => ({
  type: LOG_ERROR_STARTED,
  payload: { error, data },
});
