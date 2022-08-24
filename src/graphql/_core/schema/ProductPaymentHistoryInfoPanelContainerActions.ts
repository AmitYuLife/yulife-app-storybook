/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ProductPaymentHistoryInfoPanelContainerActions
// ====================================================

export interface ProductPaymentHistoryInfoPanelContainerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ProductPaymentHistoryInfoPanelContainerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ProductPaymentHistoryInfoPanelContainerActions {
  onPress: ProductPaymentHistoryInfoPanelContainerActions_onPress;
  event: ProductPaymentHistoryInfoPanelContainerActions_event | null;
}
