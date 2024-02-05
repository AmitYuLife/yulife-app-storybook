/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType, YuScreenCarouselItemVariant } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYuScreenProductList
// ====================================================

export interface GetYuScreenProductList_getYuScreenProductList_body_button_onPress_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface GetYuScreenProductList_getYuScreenProductList_body_button_onPress_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductList_getYuScreenProductList_body_button_onPress {
  productAction: GetYuScreenProductList_getYuScreenProductList_body_button_onPress_productAction | null;
  sduiAction: GetYuScreenProductList_getYuScreenProductList_body_button_onPress_sduiAction | null;
}

export interface GetYuScreenProductList_getYuScreenProductList_body_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductList_getYuScreenProductList_body_button {
  label: string;
  onPress: GetYuScreenProductList_getYuScreenProductList_body_button_onPress;
  event: GetYuScreenProductList_getYuScreenProductList_body_button_event | null;
}

export interface GetYuScreenProductList_getYuScreenProductList_body_contentContainerStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductList_getYuScreenProductList_body_descriptionMarkdownStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductList_getYuScreenProductList_body_images_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductList_getYuScreenProductList_body_images {
  image: GetYuScreenProductList_getYuScreenProductList_body_images_image;
  width: number;
  height: number | null;
}

export interface GetYuScreenProductList_getYuScreenProductList_body_titleMarkdownStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductList_getYuScreenProductList_body {
  id: string;
  backgroundColor: string | null;
  button: GetYuScreenProductList_getYuScreenProductList_body_button | null;
  contentContainerStyles: GetYuScreenProductList_getYuScreenProductList_body_contentContainerStyles[] | null;
  descriptionMarkdown: string | null;
  descriptionMarkdownStyles: GetYuScreenProductList_getYuScreenProductList_body_descriptionMarkdownStyles[] | null;
  images: GetYuScreenProductList_getYuScreenProductList_body_images[] | null;
  titleMarkdown: string | null;
  titleMarkdownStyles: GetYuScreenProductList_getYuScreenProductList_body_titleMarkdownStyles[] | null;
  variant: YuScreenCarouselItemVariant | null;
}

export interface GetYuScreenProductList_getYuScreenProductList {
  heading: string | null;
  body: GetYuScreenProductList_getYuScreenProductList_body[];
}

export interface GetYuScreenProductList {
  getYuScreenProductList: GetYuScreenProductList_getYuScreenProductList | null;
}
