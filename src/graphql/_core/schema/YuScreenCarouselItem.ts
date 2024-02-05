/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType, YuScreenCarouselItemVariant } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenCarouselItem
// ====================================================

export interface YuScreenCarouselItem_button_onPress_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface YuScreenCarouselItem_button_onPress_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenCarouselItem_button_onPress {
  productAction: YuScreenCarouselItem_button_onPress_productAction | null;
  sduiAction: YuScreenCarouselItem_button_onPress_sduiAction | null;
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

export interface YuScreenCarouselItem_contentContainerStyles {
  property: string;
  value: string;
}

export interface YuScreenCarouselItem_descriptionMarkdownStyles {
  property: string;
  value: string;
}

export interface YuScreenCarouselItem_images_image {
  id: string;
  uri: string | null;
}

export interface YuScreenCarouselItem_images {
  image: YuScreenCarouselItem_images_image;
  width: number;
  height: number | null;
}

export interface YuScreenCarouselItem_titleMarkdownStyles {
  property: string;
  value: string;
}

export interface YuScreenCarouselItem {
  backgroundColor: string | null;
  button: YuScreenCarouselItem_button | null;
  contentContainerStyles: YuScreenCarouselItem_contentContainerStyles[] | null;
  descriptionMarkdown: string | null;
  descriptionMarkdownStyles: YuScreenCarouselItem_descriptionMarkdownStyles[] | null;
  images: YuScreenCarouselItem_images[] | null;
  titleMarkdown: string | null;
  titleMarkdownStyles: YuScreenCarouselItem_titleMarkdownStyles[] | null;
  variant: YuScreenCarouselItemVariant | null;
}
