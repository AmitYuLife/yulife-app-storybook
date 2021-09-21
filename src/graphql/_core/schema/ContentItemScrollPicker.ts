/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemButtonType, ContentItemSDUIAction, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemScrollPicker
// ====================================================

export interface ContentItemScrollPicker_button_onPress {
  type: ContentItemSDUIAction;
  payload: string | null;
}

export interface ContentItemScrollPicker_button_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemScrollPicker_button_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemScrollPicker_button_styles {
  property: string;
  value: string;
}

export interface ContentItemScrollPicker_button {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: ContentItemScrollPicker_button_onPress | null;
  icon: ContentItemScrollPicker_button_icon | null;
  rightIcon: ContentItemScrollPicker_button_rightIcon | null;
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
  min: number;
  max: number;
  step: number;
  suffixPlural: string;
  suffixSingular: string;
  suffixSingularValue: number;
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
