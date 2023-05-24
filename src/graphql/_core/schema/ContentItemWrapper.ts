/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RNViewPointerEvents } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemWrapper
// ====================================================

export interface ContentItemWrapper_styles {
  property: string;
  value: string;
}

export interface ContentItemWrapper {
  id: string;
  styles: ContentItemWrapper_styles[] | null;
  children: string;
  pointerEvents: RNViewPointerEvents | null;
}
