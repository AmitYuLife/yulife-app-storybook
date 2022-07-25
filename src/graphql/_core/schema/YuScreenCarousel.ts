/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenCarousel
// ====================================================

export interface YuScreenCarousel_items_image {
  id: string;
  uri: string | null;
}

export interface YuScreenCarousel_items_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenCarousel_items_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenCarousel_items_button {
  label: string;
  onPress: YuScreenCarousel_items_button_onPress;
  event: YuScreenCarousel_items_button_event | null;
}

export interface YuScreenCarousel_items {
  image: YuScreenCarousel_items_image;
  altText: string;
  button: YuScreenCarousel_items_button | null;
}

export interface YuScreenCarousel {
  heading: string;
  items: YuScreenCarousel_items[] | null;
}
