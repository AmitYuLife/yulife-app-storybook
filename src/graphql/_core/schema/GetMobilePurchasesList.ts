/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { RewardListFilter } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetMobilePurchasesList
// ====================================================

export interface GetMobilePurchasesList_data_list {
  __typename: "MobilePurchasesListItem";
  id: string;
  date: string;
  title: string;
  yuCoin: number;
  status: string;
  statusColour: string;
}

export interface GetMobilePurchasesList_data {
  __typename: "MobilePurchasesList";
  id: string;
  sduiStepId: string;
  list: GetMobilePurchasesList_data_list[];
}

export interface GetMobilePurchasesList {
  data: GetMobilePurchasesList_data;
}

export interface GetMobilePurchasesListVariables {
  filter?: RewardListFilter | null;
  limit?: number | null;
  offset?: number | null;
}
