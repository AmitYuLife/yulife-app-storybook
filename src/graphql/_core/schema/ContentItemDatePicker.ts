/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemDatePicker
// ====================================================

export interface ContentItemDatePicker_pickerStyles {
  property: string;
  value: string;
}

export interface ContentItemDatePicker_buttonStyles {
  property: string;
  value: string;
}

export interface ContentItemDatePicker_buttonLeftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemDatePicker_buttonRightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemDatePicker {
  id: string;
  initialDate: string | null;
  maxDate: string;
  minDate: string;
  dateFormat: string;
  label: string;
  subLabel: string | null;
  pickerStyles: ContentItemDatePicker_pickerStyles[] | null;
  buttonStyles: ContentItemDatePicker_buttonStyles[] | null;
  buttonLeftIcon: ContentItemDatePicker_buttonLeftIcon | null;
  buttonRightIcon: ContentItemDatePicker_buttonRightIcon | null;
  size: ContentItemButtonSize;
  answerKey: string;
}
