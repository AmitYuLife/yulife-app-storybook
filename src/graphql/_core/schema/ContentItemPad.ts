/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RNViewPointerEvents } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemPad
// ====================================================

export interface ContentItemPad_styles {
  property: string;
  value: string;
}

export interface ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface ContentItemPad {
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: ContentItemPad_styles[] | null;
  dynamicStyles: ContentItemPad_dynamicStyles[] | null;
}
