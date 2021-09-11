/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemSDUIAction } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemReviewItem
// ====================================================

export interface ContentItemReviewItem_leftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemReviewItem_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemReviewItem_onPress {
  type: ContentItemSDUIAction;
  payload: string | null;
}

export interface ContentItemReviewItem {
  id: string;
  text: string;
  subheading: string;
  leftIcon: ContentItemReviewItem_leftIcon;
  rightIcon: ContentItemReviewItem_rightIcon | null;
  onPress: ContentItemReviewItem_onPress | null;
}
