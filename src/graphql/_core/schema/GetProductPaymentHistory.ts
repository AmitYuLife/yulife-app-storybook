/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductPaymentHistory
// ====================================================

export interface GetProductPaymentHistory_getProductPaymentHistory_infoPanel_remoteImage {
  id: string;
  uri: string | null;
}

export interface GetProductPaymentHistory_getProductPaymentHistory_infoPanel {
  markdown: string;
  remoteImage: GetProductPaymentHistory_getProductPaymentHistory_infoPanel_remoteImage | null;
}

export interface GetProductPaymentHistory_getProductPaymentHistory_items {
  id: string;
  amount: string;
  date: string;
  status: string;
}

export interface GetProductPaymentHistory_getProductPaymentHistory {
  infoPanel: GetProductPaymentHistory_getProductPaymentHistory_infoPanel;
  items: GetProductPaymentHistory_getProductPaymentHistory_items[] | null;
}

export interface GetProductPaymentHistory {
  getProductPaymentHistory: GetProductPaymentHistory_getProductPaymentHistory;
}

export interface GetProductPaymentHistoryVariables {
  customerProductId: string;
}
