/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, YuProductStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemPackageCards
// ====================================================

export interface ContentItemPackageCards_packageCards_header_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCards_packageCards_header_slotInfo_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCards_packageCards_header_slotInfo_logoUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCards_packageCards_header_slotInfo {
  name: string;
  status: YuProductStatus;
  backgroundUrl: ContentItemPackageCards_packageCards_header_slotInfo_backgroundUrl;
  logoUrl: ContentItemPackageCards_packageCards_header_slotInfo_logoUrl | null;
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
  /**
   * Optional field that can dynamically filter packageCards field on client
   * Based on dynamic data, retrieved by accessing this key
   * Supported at RN client version >=3.23.0
   */
  filterBasedOnAnswerKey: string | null;
  packageCards: ContentItemPackageCards_packageCards[] | null;
}
