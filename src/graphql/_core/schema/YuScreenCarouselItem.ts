/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenCarouselItem
// ====================================================

export interface YuScreenCarouselItem_image {
  id: string;
  uri: string | null;
}

export interface YuScreenCarouselItem_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenCarouselItem_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenCarouselItem_button {
  label: string;
  onPress: YuScreenCarouselItem_button_onPress;
  event: YuScreenCarouselItem_button_event | null;
}

export interface YuScreenCarouselItem {
  image: YuScreenCarouselItem_image;
  altText: string;
  button: YuScreenCarouselItem_button | null;
}
