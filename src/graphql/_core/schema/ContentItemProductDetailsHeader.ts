/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemProductDetailsHeader
// ====================================================

export interface ContentItemProductDetailsHeader_styles {
  property: string;
  value: string;
}

export interface ContentItemProductDetailsHeader_providerLogo_image {
  id: string;
  uri: string | null;
}

export interface ContentItemProductDetailsHeader_providerLogo {
  image: ContentItemProductDetailsHeader_providerLogo_image;
  width: number;
}

export interface ContentItemProductDetailsHeader_itemSlot {
  iconUrl: string;
  backgroundUrl: string;
}

export interface ContentItemProductDetailsHeader_productIdentifier {
  label: string;
  value: string;
}

export interface ContentItemProductDetailsHeader_benefit {
  title: string | null;
  markdown: string;
}

export interface ContentItemProductDetailsHeader {
  id: string;
  coverType: CoverType;
  productName: string;
  productDetailsHeaderYuCoinPower: number;
  styles: ContentItemProductDetailsHeader_styles[] | null;
  providerLogo: ContentItemProductDetailsHeader_providerLogo | null;
  itemSlot: ContentItemProductDetailsHeader_itemSlot;
  productIdentifier: ContentItemProductDetailsHeader_productIdentifier | null;
  benefit: ContentItemProductDetailsHeader_benefit | null;
}
