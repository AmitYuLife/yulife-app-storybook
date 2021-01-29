import { SyncAction } from "../_core/types";

export const PRODUCT_ITEM_VIEWED = "PRODUCT_ITEM_VIEWED";
export const PRODUCT_ITEM_INSPECTED = "PRODUCT_ITEM_INSPECTED";

export const logProductItemViewedActionCreator = (productId: string): SyncAction => ({
  type: PRODUCT_ITEM_VIEWED,
  payload: { productId },
});

export const logProductItemInspectedActionCreator = (productId: string): SyncAction => ({
  type: PRODUCT_ITEM_INSPECTED,
  payload: { productId },
});
