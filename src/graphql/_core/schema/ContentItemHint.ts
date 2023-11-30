/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemHint
// ====================================================

export interface ContentItemHint_hintImage {
  id: string;
  uri: string | null;
}

export interface ContentItemHint_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemHint_styles {
  property: string;
  value: string;
}

export interface ContentItemHint {
  id: string;
  hintTitle: string;
  contentItemHintDescription: string;
  hintImage: ContentItemHint_hintImage;
  onPress: ContentItemHint_onPress | null;
  styles: ContentItemHint_styles[] | null;
}
