/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YuProductStatus, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYuScreen
// ====================================================

export interface GetYuScreen_getYuScreen_productSlots_leftBackgroundImage {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_productSlots_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_productSlots_rightStatusIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_productSlots_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_productSlots_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_productSlots {
  id: string;
  leftText: string | null;
  leftTextColour: string | null;
  status: YuProductStatus;
  title: string;
  titleColour: string;
  backgroundColour: string;
  topShadowColour: string;
  bottomShadowColour: string;
  leftBackgroundImage: GetYuScreen_getYuScreen_productSlots_leftBackgroundImage | null;
  rightIcon: GetYuScreen_getYuScreen_productSlots_rightIcon | null;
  rightStatusIcon: GetYuScreen_getYuScreen_productSlots_rightStatusIcon | null;
  onPress: GetYuScreen_getYuScreen_productSlots_onPress | null;
  event: GetYuScreen_getYuScreen_productSlots_event | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_button {
  label: string;
  onPress: GetYuScreen_getYuScreen_productCarousel_items_button_onPress;
  event: GetYuScreen_getYuScreen_productCarousel_items_button_event | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items {
  image: GetYuScreen_getYuScreen_productCarousel_items_image;
  altText: string;
  button: GetYuScreen_getYuScreen_productCarousel_items_button | null;
}

export interface GetYuScreen_getYuScreen_productCarousel {
  heading: string;
  items: GetYuScreen_getYuScreen_productCarousel_items[] | null;
}

export interface GetYuScreen_getYuScreen_surveyFooter_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_surveyFooter_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_surveyFooter_button {
  label: string;
  onPress: GetYuScreen_getYuScreen_surveyFooter_button_onPress;
  event: GetYuScreen_getYuScreen_surveyFooter_button_event | null;
}

export interface GetYuScreen_getYuScreen_surveyFooter_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_surveyFooter {
  markdown: string;
  backgroundColour: string;
  button: GetYuScreen_getYuScreen_surveyFooter_button;
  image: GetYuScreen_getYuScreen_surveyFooter_image;
}

export interface GetYuScreen_getYuScreen {
  productSlots: (GetYuScreen_getYuScreen_productSlots | null)[] | null;
  productCarousel: GetYuScreen_getYuScreen_productCarousel;
  surveyFooter: GetYuScreen_getYuScreen_surveyFooter | null;
}

export interface GetYuScreen {
  getYuScreen: GetYuScreen_getYuScreen | null;
}
