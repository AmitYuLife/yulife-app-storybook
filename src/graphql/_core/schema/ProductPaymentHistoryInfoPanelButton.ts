/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ProductPaymentHistoryInfoPanelButton
// ====================================================

export interface ProductPaymentHistoryInfoPanelButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ProductPaymentHistoryInfoPanelButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ProductPaymentHistoryInfoPanelButton {
  label: string;
  onPress: ProductPaymentHistoryInfoPanelButton_onPress;
  event: ProductPaymentHistoryInfoPanelButton_event | null;
}
