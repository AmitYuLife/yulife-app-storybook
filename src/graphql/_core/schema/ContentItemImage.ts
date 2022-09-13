/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType, ContentItemImageSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemImage
// ====================================================

export interface ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface ContentItemImage_styles {
  property: string;
  value: string;
}

export interface ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemImage {
  id: string;
  image: ContentItemImage_image | null;
  styles: ContentItemImage_styles[] | null;
  wrapperStyles: ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}
