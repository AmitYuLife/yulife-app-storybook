/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemRowIconTextBannerType, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProductPaymentHistory
// ====================================================

export interface GetProductPaymentHistory_getProductPaymentHistory_infoPanel_remoteImage {
  id: string;
  uri: string | null;
}

export interface GetProductPaymentHistory_getProductPaymentHistory_infoPanel_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetProductPaymentHistory_getProductPaymentHistory_infoPanel_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetProductPaymentHistory_getProductPaymentHistory_infoPanel_button {
  label: string;
  onPress: GetProductPaymentHistory_getProductPaymentHistory_infoPanel_button_onPress;
  event: GetProductPaymentHistory_getProductPaymentHistory_infoPanel_button_event | null;
}

export interface GetProductPaymentHistory_getProductPaymentHistory_infoPanel_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetProductPaymentHistory_getProductPaymentHistory_infoPanel_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetProductPaymentHistory_getProductPaymentHistory_infoPanel_containerActions {
  onPress: GetProductPaymentHistory_getProductPaymentHistory_infoPanel_containerActions_onPress;
  event: GetProductPaymentHistory_getProductPaymentHistory_infoPanel_containerActions_event | null;
}

export interface GetProductPaymentHistory_getProductPaymentHistory_infoPanel {
  markdown: string;
  remoteImage: GetProductPaymentHistory_getProductPaymentHistory_infoPanel_remoteImage | null;
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
  button: GetProductPaymentHistory_getProductPaymentHistory_infoPanel_button | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: GetProductPaymentHistory_getProductPaymentHistory_infoPanel_containerActions | null;
}

export interface GetProductPaymentHistory_getProductPaymentHistory_items {
  id: string;
  amount: string;
  date: string;
  status: string;
}

export interface GetProductPaymentHistory_getProductPaymentHistory {
  infoPanel: GetProductPaymentHistory_getProductPaymentHistory_infoPanel | null;
  items: GetProductPaymentHistory_getProductPaymentHistory_items[] | null;
}

export interface GetProductPaymentHistory {
  getProductPaymentHistory: GetProductPaymentHistory_getProductPaymentHistory;
}

export interface GetProductPaymentHistoryVariables {
  customerProductId: string;
}
