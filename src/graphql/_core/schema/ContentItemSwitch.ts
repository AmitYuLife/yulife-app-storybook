/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemSwitch
// ====================================================

export interface ContentItemSwitch_styles {
  property: string;
  value: string;
}

export interface ContentItemSwitch_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemSwitch_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemSwitch {
  id: string;
  styles: ContentItemSwitch_styles[] | null;
  wrapperStyles: ContentItemSwitch_wrapperStyles[] | null;
  onPress: ContentItemSwitch_onPress | null;
  defaultValue: boolean;
}
