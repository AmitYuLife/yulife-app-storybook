/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YuProductStatus, YuWorld } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemPackageCardSlotInfo
// ====================================================

export interface ContentItemPackageCardSlotInfo_itemUrl_url {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCardSlotInfo_itemUrl {
  url: ContentItemPackageCardSlotInfo_itemUrl_url;
  world: YuWorld;
}

export interface ContentItemPackageCardSlotInfo_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCardSlotInfo {
  status: YuProductStatus;
  itemUrl: ContentItemPackageCardSlotInfo_itemUrl[] | null;
  backgroundUrl: ContentItemPackageCardSlotInfo_backgroundUrl;
  name: string;
}
