/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType, YuScreenCarouselItemVariant } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenCarousel
// ====================================================

export interface YuScreenCarousel_items_button_onPress_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface YuScreenCarousel_items_button_onPress_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenCarousel_items_button_onPress {
  productAction: YuScreenCarousel_items_button_onPress_productAction | null;
  sduiAction: YuScreenCarousel_items_button_onPress_sduiAction | null;
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

export interface YuScreenCarousel_items_contentContainerStyles {
  property: string;
  value: string;
}

export interface YuScreenCarousel_items_descriptionMarkdownStyles {
  property: string;
  value: string;
}

export interface YuScreenCarousel_items_images_image {
  id: string;
  uri: string | null;
}

export interface YuScreenCarousel_items_images {
  image: YuScreenCarousel_items_images_image;
  width: number;
}

export interface YuScreenCarousel_items_titleMarkdownStyles {
  property: string;
  value: string;
}

export interface YuScreenCarousel_items {
  backgroundColor: string | null;
  button: YuScreenCarousel_items_button | null;
  contentContainerStyles: YuScreenCarousel_items_contentContainerStyles[] | null;
  descriptionMarkdown: string | null;
  descriptionMarkdownStyles: YuScreenCarousel_items_descriptionMarkdownStyles[] | null;
  images: YuScreenCarousel_items_images[] | null;
  titleMarkdown: string | null;
  titleMarkdownStyles: YuScreenCarousel_items_titleMarkdownStyles[] | null;
  variant: YuScreenCarouselItemVariant | null;
}

export interface YuScreenCarousel {
  heading: string;
  items: (YuScreenCarousel_items | null)[];
}
