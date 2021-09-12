/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemSDUIAction } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemPersonalProductReviewItem
// ====================================================

export interface ContentItemPersonalProductReviewItem_leftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductReviewItem_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductReviewItem_onPress {
  type: ContentItemSDUIAction;
  payload: string | null;
}

export interface ContentItemPersonalProductReviewItem {
  id: string;
  text: string;
  subheading: string;
  stepKey: string;
  leftIcon: ContentItemPersonalProductReviewItem_leftIcon;
  rightIcon: ContentItemPersonalProductReviewItem_rightIcon | null;
  onPress: ContentItemPersonalProductReviewItem_onPress | null;
}
