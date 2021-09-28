/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemPackageCardPower
// ====================================================

export interface ContentItemPackageCardPower_leftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCardPower_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPackageCardPower {
  id: string;
  leftIcon: ContentItemPackageCardPower_leftIcon;
  rightIcon: ContentItemPackageCardPower_rightIcon | null;
  powerTitle: string;
  description: string;
  isLocked: boolean | null;
}
