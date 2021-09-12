/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemSDUIAction } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemLottie
// ====================================================

export interface ContentItemLottie_styles {
  property: string;
  value: string;
}

export interface ContentItemLottie_onAnimationEnd {
  type: ContentItemSDUIAction;
  payload: string | null;
}

export interface ContentItemLottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: ContentItemLottie_styles[] | null;
  onAnimationEnd: ContentItemLottie_onAnimationEnd | null;
}
