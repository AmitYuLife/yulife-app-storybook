/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYuCoinPowerInfo
// ====================================================

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_yuCoin_info_button {
  label: string;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_yuCoin_info {
  title: string;
  description: string;
  button: GetYuCoinPowerInfo_getYuCoinPowerInfo_yuCoin_info_button;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_yuCoin {
  earnRate: number;
  earnings: number;
  info: GetYuCoinPowerInfo_getYuCoinPowerInfo_yuCoin_info;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_productPreviews_items_image {
  id: string;
  uri: string | null;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_productPreviews_items {
  id: string;
  title: string;
  description: string;
  yuCoinPower: number;
  backgroundColor: string;
  image: GetYuCoinPowerInfo_getYuCoinPowerInfo_productPreviews_items_image;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_productPreviews {
  title: string;
  items: GetYuCoinPowerInfo_getYuCoinPowerInfo_productPreviews_items[];
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_sections_items_icon {
  id: string;
  uri: string | null;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_sections_items {
  title: string;
  milestone: string;
  rewardText: string;
  icon: GetYuCoinPowerInfo_getYuCoinPowerInfo_sections_items_icon;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_sections {
  title: string;
  items: GetYuCoinPowerInfo_getYuCoinPowerInfo_sections_items[];
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_products_image {
  id: string;
  uri: string | null;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_products_button_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_products_button_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_products_button {
  label: string;
  sduiAction: GetYuCoinPowerInfo_getYuCoinPowerInfo_products_button_sduiAction | null;
  productAction: GetYuCoinPowerInfo_getYuCoinPowerInfo_products_button_productAction | null;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo_products {
  title: string;
  yuCoinPower: number;
  description: string;
  backgroundColor: string;
  image: GetYuCoinPowerInfo_getYuCoinPowerInfo_products_image;
  button: GetYuCoinPowerInfo_getYuCoinPowerInfo_products_button;
}

export interface GetYuCoinPowerInfo_getYuCoinPowerInfo {
  yuCoin: GetYuCoinPowerInfo_getYuCoinPowerInfo_yuCoin;
  productPreviews: GetYuCoinPowerInfo_getYuCoinPowerInfo_productPreviews;
  sections: GetYuCoinPowerInfo_getYuCoinPowerInfo_sections[];
  products: GetYuCoinPowerInfo_getYuCoinPowerInfo_products[];
}

export interface GetYuCoinPowerInfo {
  getYuCoinPowerInfo: GetYuCoinPowerInfo_getYuCoinPowerInfo;
}

export interface GetYuCoinPowerInfoVariables {
  productIds: string[];
}
