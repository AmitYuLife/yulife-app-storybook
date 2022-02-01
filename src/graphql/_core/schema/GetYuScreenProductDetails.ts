/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYuScreenProductDetails
// ====================================================

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad {
  __typename: "ContentItemPad" | "ContentItemCollapsingGenericHeader" | "ContentItemText" | "ContentItemButton";
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_providerLogo_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_providerLogo {
  image: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_providerLogo_image;
  width: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_itemSlot {
  iconUrl: string;
  backgroundUrl: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_productIdentifier {
  label: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_benefit {
  title: string | null;
  markdown: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader {
  __typename: "ContentItemProductDetailsHeader";
  id: string;
  coverType: CoverType;
  productName: string;
  productDetailsHeaderYuCoinPower: number;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_styles[] | null;
  providerLogo: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_providerLogo | null;
  itemSlot: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_itemSlot;
  productIdentifier: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_productIdentifier | null;
  benefit: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_benefit | null;
}

export type GetYuScreenProductDetails_getYuScreenProductDetails_body =
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader;

export interface GetYuScreenProductDetails_getYuScreenProductDetails {
  /**
   * Content displayed inside the scrollview area
   */
  body: GetYuScreenProductDetails_getYuScreenProductDetails_body[] | null;
}

export interface GetYuScreenProductDetails {
  getYuScreenProductDetails: GetYuScreenProductDetails_getYuScreenProductDetails;
}

export interface GetYuScreenProductDetailsVariables {
  customerProductId: string;
}
