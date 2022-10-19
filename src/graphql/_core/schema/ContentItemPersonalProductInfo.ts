/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, AvatarPartType, YuWorld } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemPersonalProductInfo
// ====================================================

export interface ContentItemPersonalProductInfo_flatListItemOverlayStyles {
  property: string;
  value: string;
}

export interface ContentItemPersonalProductInfo_providerImageUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductInfo_largeProviderImageUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductInfo_productDescription {
  id: string;
  parsedMarkdown: string | null;
}

export interface ContentItemPersonalProductInfo {
  id: string;
  coverType: CoverType;
  productTitle: string;
  flatListItemOverlayStyles: ContentItemPersonalProductInfo_flatListItemOverlayStyles[] | null;
  providerImageUrl: ContentItemPersonalProductInfo_providerImageUrl | null;
  largeProviderImageUrl: ContentItemPersonalProductInfo_largeProviderImageUrl | null;
  productDescription: ContentItemPersonalProductInfo_productDescription;
  partType: AvatarPartType | null;
  selectedYuWorld: YuWorld | null;
  swiperTopText: string | null;
}
