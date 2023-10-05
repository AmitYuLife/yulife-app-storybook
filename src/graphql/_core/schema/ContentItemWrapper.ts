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

export interface ContentItemWrapper_localDispatchActions {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemWrapper_localDispatchActionsOnMount {
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
   * Supported RN version 3.87.0
   */
  onPress: ContentItemWrapper_onPress | null;
  /**
   * Supported RN version 3.87.0
   */
  scrollViewProps: string | null;
  /**
   * Supported RN Version 3.101.0
   */
  dynamicStyleKey: string | null;
  /**
   * Supported RN Version 3.101.0
   */
  localDispatchActions: ContentItemWrapper_localDispatchActions[] | null;
  /**
   * Supported RN Version 3.101.0
   */
  localDispatchActionsOnMount: ContentItemWrapper_localDispatchActionsOnMount[] | null;
}
