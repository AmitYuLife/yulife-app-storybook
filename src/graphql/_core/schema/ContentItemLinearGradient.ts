/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemLinearGradient
// ====================================================

export interface ContentItemLinearGradient_styles {
  property: string;
  value: string;
}

export interface ContentItemLinearGradient_start {
  x: number;
  y: number;
}

export interface ContentItemLinearGradient_end {
  x: number;
  y: number;
}

export interface ContentItemLinearGradient {
  id: string;
  colors: string[];
  styles: ContentItemLinearGradient_styles[] | null;
  start: ContentItemLinearGradient_start | null;
  end: ContentItemLinearGradient_end | null;
}
