/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, YuProductStatus, YuWorld } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemPackageCards
// ====================================================

export interface ContentItemPackageCards_packageCards_header_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCards_packageCards_header_slotInfo_itemUrl_url {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCards_packageCards_header_slotInfo_itemUrl {
  url: ContentItemPackageCards_packageCards_header_slotInfo_itemUrl_url;
  world: YuWorld;
}

export interface ContentItemPackageCards_packageCards_header_slotInfo_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCards_packageCards_header_slotInfo {
  status: YuProductStatus;
  itemUrl: ContentItemPackageCards_packageCards_header_slotInfo_itemUrl[] | null;
  backgroundUrl: ContentItemPackageCards_packageCards_header_slotInfo_backgroundUrl;
  name: string;
}

export interface ContentItemPackageCards_packageCards_header {
  backgroundUrl: ContentItemPackageCards_packageCards_header_backgroundUrl;
  slotInfo: ContentItemPackageCards_packageCards_header_slotInfo;
}

export interface ContentItemPackageCards_packageCards_powers_leftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCards_packageCards_powers_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCards_packageCards_powers {
  leftIcon: ContentItemPackageCards_packageCards_powers_leftIcon;
  rightIcon: ContentItemPackageCards_packageCards_powers_rightIcon | null;
  title: string;
  description: string;
  isLocked: boolean | null;
}

export interface ContentItemPackageCards_packageCards {
  id: string;
  value: number;
  packageMaxValue: number;
  coverType: CoverType;
  bonusEarnRate: number;
  header: ContentItemPackageCards_packageCards_header;
  powers: ContentItemPackageCards_packageCards_powers[] | null;
}

export interface ContentItemPackageCards {
  id: string;
  answerKey: string;
  answerKeyDefaultValue: number;
  packageCards: ContentItemPackageCards_packageCards[] | null;
}
