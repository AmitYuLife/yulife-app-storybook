/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenSurveyFooter
// ====================================================

export interface YuScreenSurveyFooter_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenSurveyFooter_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenSurveyFooter_button {
  label: string;
  onPress: YuScreenSurveyFooter_button_onPress;
  event: YuScreenSurveyFooter_button_event | null;
}

export interface YuScreenSurveyFooter_image {
  id: string;
  uri: string | null;
}

export interface YuScreenSurveyFooter {
  markdown: string;
  backgroundColour: string;
  button: YuScreenSurveyFooter_button;
  image: YuScreenSurveyFooter_image;
}
