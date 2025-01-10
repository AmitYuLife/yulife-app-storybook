import { Image, UserSearchItem } from "@redux/_core/types";

export type GiftingAsset = {
  id: string;
  image: Image;
  textColor?: string;
};

export type GiftingBackgroundAsset = {
  id: string;
  image: Image;
  previewImage?: Image;
  textColor?: string;
  backgroundColor: string;
};

export interface IGiftingManagerState {
  targetUsers: Record<string, UserSearchItem>;
  maxTarget: number;
}

export type GiftingChoice = {
  id: string;
  label: string;
};

export type YuCoinDenominationChoice = {
  id: number;
  label: string;
};

export enum GiftingManagerPages {
  INTRO = 0,
  SELECT_RECIPIENTS = 1,
  SELECT_MESSAGE = 2,
  SELECT_YU_COIN = 3,
  MESSAGE_PREVIEW = 4,
  SUCCESS = 5,
}
