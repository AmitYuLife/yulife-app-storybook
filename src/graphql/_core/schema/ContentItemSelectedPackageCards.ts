/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, YuProductStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemSelectedPackageCards
// ====================================================

export interface ContentItemSelectedPackageCards_styles {
  property: string;
  value: string;
}

export interface ContentItemSelectedPackageCards_providerLogo_url {
  id: string;
  uri: string | null;
}

export interface ContentItemSelectedPackageCards_providerLogo {
  url: ContentItemSelectedPackageCards_providerLogo_url | null;
  width: number | null;
}

export interface ContentItemSelectedPackageCards_coverOptions_slotInfo_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemSelectedPackageCards_coverOptions_slotInfo_logoUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemSelectedPackageCards_coverOptions_slotInfo {
  name: string;
  status: YuProductStatus;
  backgroundUrl: ContentItemSelectedPackageCards_coverOptions_slotInfo_backgroundUrl;
  logoUrl: ContentItemSelectedPackageCards_coverOptions_slotInfo_logoUrl | null;
}

export interface ContentItemSelectedPackageCards_coverOptions {
  coverType: CoverType;
  price: string;
  slotInfo: ContentItemSelectedPackageCards_coverOptions_slotInfo;
}

export interface ContentItemSelectedPackageCards {
  id: string;
  styles: ContentItemSelectedPackageCards_styles[] | null;
  providerLogo: ContentItemSelectedPackageCards_providerLogo | null;
  packageCardsPriceDescription: string | null;
  coverOptions: ContentItemSelectedPackageCards_coverOptions[] | null;
}
