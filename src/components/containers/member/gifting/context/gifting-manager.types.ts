import { Image, UserSearchItem } from "@redux/_core/types";

export type GiftingAsset = {
  id: string;
  image: Image;
  textColor?: string;
};

export type GiftingBackgroundAsset = {
  id: string;
  image: Image;
  textColor?: string;
  backgroundColor: string;
  hasAnimatedRays: boolean;
};

export enum GiftingManagerActionTypes {
  TOGGLE_GIFTING_TARGET_USER_ACTION = "TOGGLE_GIFTING_TARGET_USER_ACTION",
  SET_GIFTING_TARGET_USERS_ACTION = "SET_GIFTING_TARGET_USERS_ACTION",
  SET_MAX_GIFTING_TARGETS_ACTION = "SET_MAX_GIFTING_TARGETS_ACTION",
}

export interface IGiftingManagerState {
  targetUsers: Record<string, UserSearchItem>;
  maxTarget: number;
}

export type IGiftingManagerAction =
  | {
      type: GiftingManagerActionTypes.TOGGLE_GIFTING_TARGET_USER_ACTION;
      payload: UserSearchItem;
    }
  | {
      type: GiftingManagerActionTypes.SET_MAX_GIFTING_TARGETS_ACTION;
      payload: number;
    }
  | {
      type: GiftingManagerActionTypes.SET_GIFTING_TARGET_USERS_ACTION;
      payload: UserSearchItem[];
    };

export type GiftingChoice = {
  id: string;
  label: string;
};

export type YuCoinDenominationChoice = {
  id: number;
  label: string;
};

export enum GiftingManagerPages {
  SELECT_RECIPIENTS = 0,
  SELECT_MESSAGE = 1,
  SELECT_YU_COIN = 2,
  MESSAGE_PREVIEW = 3,
}
