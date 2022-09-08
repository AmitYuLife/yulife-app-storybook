/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenCarouselItem
// ====================================================

export interface YuScreenCarouselItem_images_image {
  id: string;
  uri: string | null;
}

export interface YuScreenCarouselItem_images {
  image: YuScreenCarouselItem_images_image;
  width: number;
}

export interface YuScreenCarouselItem_button_onPress {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
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
  images: YuScreenCarouselItem_images[] | null;
  altText: string;
  title: string | null;
  description: string | null;
  backgroundColor: string | null;
  button: YuScreenCarouselItem_button | null;
}
