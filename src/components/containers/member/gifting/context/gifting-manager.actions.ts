import { UserSearchItem } from "@redux/_core/types";
import { GiftingManagerActionTypes } from "./gifting-manager.types";

export const toggleGiftingTargetUser = (payload: UserSearchItem) => ({
  type: GiftingManagerActionTypes.TOGGLE_GIFTING_TARGET_USER_ACTION as GiftingManagerActionTypes.TOGGLE_GIFTING_TARGET_USER_ACTION,
  payload,
});

export const setMaxGiftingTargets = (payload: number) => ({
  type: GiftingManagerActionTypes.SET_MAX_GIFTING_TARGETS_ACTION as GiftingManagerActionTypes.SET_MAX_GIFTING_TARGETS_ACTION,
  payload,
});
