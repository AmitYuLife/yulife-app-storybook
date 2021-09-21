/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, YuProductStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemSelectedPackageCard
// ====================================================

export interface ContentItemSelectedPackageCard_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemSelectedPackageCard_slotInfo_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemSelectedPackageCard_slotInfo_logoUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemSelectedPackageCard_slotInfo {
  name: string;
  status: YuProductStatus;
  backgroundUrl: ContentItemSelectedPackageCard_slotInfo_backgroundUrl;
  logoUrl: ContentItemSelectedPackageCard_slotInfo_logoUrl | null;
}

export interface ContentItemSelectedPackageCard {
  id: string;
  previousPrice: string | null;
  price: string;
  priceDescription: string;
  coverType: CoverType;
  backgroundUrl: ContentItemSelectedPackageCard_backgroundUrl;
  slotInfo: ContentItemSelectedPackageCard_slotInfo;
}
