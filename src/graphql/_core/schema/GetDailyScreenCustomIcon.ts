/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetDailyScreenCustomIcon
// ====================================================

export interface GetDailyScreenCustomIcon_getDailyScreenCustomIcon_image_source {
  uri: string | null;
}

export interface GetDailyScreenCustomIcon_getDailyScreenCustomIcon_image {
  width: number;
  height: number;
  source: GetDailyScreenCustomIcon_getDailyScreenCustomIcon_image_source;
}

export interface GetDailyScreenCustomIcon_getDailyScreenCustomIcon_text {
  x: number;
  y: number;
  type: string;
  value: string;
  colour: string;
}

export interface GetDailyScreenCustomIcon_getDailyScreenCustomIcon_onPress {
  payload: string | null;
  type: SduiActionType;
}

export interface GetDailyScreenCustomIcon_getDailyScreenCustomIcon {
  position: string;
  y: number;
  x: number;
  image: GetDailyScreenCustomIcon_getDailyScreenCustomIcon_image;
  text: GetDailyScreenCustomIcon_getDailyScreenCustomIcon_text;
  onPress: GetDailyScreenCustomIcon_getDailyScreenCustomIcon_onPress;
}

export interface GetDailyScreenCustomIcon {
  getDailyScreenCustomIcon: GetDailyScreenCustomIcon_getDailyScreenCustomIcon | null;
}
