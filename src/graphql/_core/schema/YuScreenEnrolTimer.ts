/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenEnrolTimer
// ====================================================

export interface YuScreenEnrolTimer_styles {
  property: string;
  value: string;
}

export interface YuScreenEnrolTimer_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenEnrolTimer_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenEnrolTimer_button {
  label: string;
  onPress: YuScreenEnrolTimer_button_onPress;
  event: YuScreenEnrolTimer_button_event | null;
}

export interface YuScreenEnrolTimer {
  heading: string | null;
  secondsUntilTarget: number;
  styles: YuScreenEnrolTimer_styles[] | null;
  button: YuScreenEnrolTimer_button | null;
  backgroundGradientList: string[] | null;
}
