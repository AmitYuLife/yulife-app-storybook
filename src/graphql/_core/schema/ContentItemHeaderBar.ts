/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemHeaderBar
// ====================================================

export interface ContentItemHeaderBar_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemHeaderBar_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemHeaderBar {
  id: string;
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: ContentItemHeaderBar_onRightIconPress | null;
  publishKeyHeight: string | null;
  /**
   * Supported RN version 3.63.0
   */
  color: string | null;
  /**
   * Supported RN version 3.70.0
   */
  backgroundColor: string | null;
}
