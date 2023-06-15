/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { RNViewPointerEvents, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemWrapper
// ====================================================

export interface ContentItemWrapper_styles {
  property: string;
  value: string;
}

export interface ContentItemWrapper_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemWrapper {
  id: string;
  styles: ContentItemWrapper_styles[] | null;
  children: string;
  pointerEvents: RNViewPointerEvents | null;
  /**
   * Supported RN version 3.85.0
   */
  absolute: string | null;
  /**
   * Supported RN version 3.86.0
   */
  onPress: ContentItemWrapper_onPress | null;
}
