/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YuProductStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemPackageCardSlotInfo
// ====================================================

export interface ContentItemPackageCardSlotInfo_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCardSlotInfo {
  status: YuProductStatus;
  backgroundUrl: ContentItemPackageCardSlotInfo_backgroundUrl;
  name: string;
}
