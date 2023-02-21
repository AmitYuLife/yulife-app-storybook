/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemProductDetailsHoldingHeader
// ====================================================

export interface ContentItemProductDetailsHoldingHeader_linearGradient_start {
  x: number;
  y: number;
}

export interface ContentItemProductDetailsHoldingHeader_linearGradient_end {
  x: number;
  y: number;
}

export interface ContentItemProductDetailsHoldingHeader_linearGradient {
  colors: string[];
  start: ContentItemProductDetailsHoldingHeader_linearGradient_start | null;
  end: ContentItemProductDetailsHoldingHeader_linearGradient_end | null;
}

export interface ContentItemProductDetailsHoldingHeader_image {
  id: string;
  uri: string | null;
}

export interface ContentItemProductDetailsHoldingHeader_timer {
  secondsUntilTarget: number;
}

export interface ContentItemProductDetailsHoldingHeader {
  id: string;
  linearGradient: ContentItemProductDetailsHoldingHeader_linearGradient | null;
  image: ContentItemProductDetailsHoldingHeader_image | null;
  title: string | null;
  timer: ContentItemProductDetailsHoldingHeader_timer | null;
}
