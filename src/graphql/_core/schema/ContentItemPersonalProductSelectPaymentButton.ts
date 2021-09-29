/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemPersonalProductSelectPaymentButton
// ====================================================

export interface ContentItemPersonalProductSelectPaymentButton_button_infoBtnLeftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductSelectPaymentButton_button_infoBtnRightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductSelectPaymentButton_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemPersonalProductSelectPaymentButton_button_active_leftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductSelectPaymentButton_button_active_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductSelectPaymentButton_button_active {
  label: string;
  leftIcon: ContentItemPersonalProductSelectPaymentButton_button_active_leftIcon | null;
  rightIcon: ContentItemPersonalProductSelectPaymentButton_button_active_rightIcon | null;
}

export interface ContentItemPersonalProductSelectPaymentButton_button {
  id: string;
  /**
   * Default passive label(placeholder)
   */
  label: string;
  infoBtnLeftIcon: ContentItemPersonalProductSelectPaymentButton_button_infoBtnLeftIcon | null;
  infoBtnRightIcon: ContentItemPersonalProductSelectPaymentButton_button_infoBtnRightIcon | null;
  onPress: ContentItemPersonalProductSelectPaymentButton_button_onPress | null;
  active: ContentItemPersonalProductSelectPaymentButton_button_active;
  answerKeys: string[] | null;
}

export interface ContentItemPersonalProductSelectPaymentButton {
  id: string;
  companyName: string;
  companyCountryCode: string;
  themeStyle: string;
  applePayEnabled: boolean;
  googlePayEnabled: boolean;
  button: ContentItemPersonalProductSelectPaymentButton_button;
}
