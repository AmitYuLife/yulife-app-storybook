/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemButtonType, SduiActionType, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemScrollPicker
// ====================================================

export interface ContentItemScrollPicker_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemScrollPicker_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemScrollPicker_button_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemScrollPicker_button_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemScrollPicker_button_styles {
  property: string;
  value: string;
}

export interface ContentItemScrollPicker_button {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: ContentItemScrollPicker_button_onPress | null;
  event: ContentItemScrollPicker_button_event | null;
  icon: ContentItemScrollPicker_button_icon | null;
  contentItemButtonRightIcon: ContentItemScrollPicker_button_contentItemButtonRightIcon | null;
  styles: ContentItemScrollPicker_button_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItemScrollPicker_displayFormat {
  answerKey: string;
  plural: string | null;
  singular: string | null;
  singularValue: number | null;
  isDynamic: boolean | null;
}

export interface ContentItemScrollPicker_variants_wheels {
  answerKey: string;
  /**
   * Supported RN version 3.50.0
   */
  initialStepIndex: number | null;
  min: number;
  max: number;
  step: number;
  suffixPlural: string;
  suffixSingular: string;
  suffixSingularValue: number;
  /**
   * Used when the last value includes anything over that value. E.g 10+
   */
  suffixMax: string | null;
}

export interface ContentItemScrollPicker_variants {
  id: string;
  answerKey: string | null;
  toggleLabel: string | null;
  toggleIndex: number | null;
  wheels: ContentItemScrollPicker_variants_wheels[];
}

export interface ContentItemScrollPicker {
  id: string;
  pickerConfirmButtonLabel: string;
  pickerCancelButtonLabel: string;
  button: ContentItemScrollPicker_button;
  answerKey: string;
  displayFormat: ContentItemScrollPicker_displayFormat[][];
  variants: ContentItemScrollPicker_variants[];
}
