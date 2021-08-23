/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemSDUIAction } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemHeaderBar
// ====================================================

export interface ContentItemHeaderBar_onLeftIconPress {
  type: ContentItemSDUIAction;
  payload: string | null;
}

export interface ContentItemHeaderBar_onRightIconPress {
  type: ContentItemSDUIAction;
  payload: string | null;
}

export interface ContentItemHeaderBar {
  logo: string | null;
  leftIcon: string | null;
  rightIcon: string | null;
  onLeftIconPress: ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: ContentItemHeaderBar_onRightIconPress | null;
}
