/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemRowIconTextBannerType, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenProductPaymentHistoryInfoPanel
// ====================================================

export interface YuScreenProductPaymentHistoryInfoPanel_remoteImage {
  id: string;
  uri: string | null;
}

export interface YuScreenProductPaymentHistoryInfoPanel_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenProductPaymentHistoryInfoPanel_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenProductPaymentHistoryInfoPanel_button {
  label: string;
  onPress: YuScreenProductPaymentHistoryInfoPanel_button_onPress;
  event: YuScreenProductPaymentHistoryInfoPanel_button_event | null;
}

export interface YuScreenProductPaymentHistoryInfoPanel_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenProductPaymentHistoryInfoPanel_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenProductPaymentHistoryInfoPanel_containerActions {
  onPress: YuScreenProductPaymentHistoryInfoPanel_containerActions_onPress;
  event: YuScreenProductPaymentHistoryInfoPanel_containerActions_event | null;
}

export interface YuScreenProductPaymentHistoryInfoPanel {
  markdown: string;
  remoteImage: YuScreenProductPaymentHistoryInfoPanel_remoteImage | null;
  /**
   * RN client version >= 3.45.0
   */
  type: ContentItemRowIconTextBannerType;
  /**
   * RN client version >= 3.45.0
   */
  titleMarkdown: string | null;
  /**
   * RN client version >= 3.45.0
   */
  showCloseIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   */
  button: YuScreenProductPaymentHistoryInfoPanel_button | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: YuScreenProductPaymentHistoryInfoPanel_containerActions | null;
}
