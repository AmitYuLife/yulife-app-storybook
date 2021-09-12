/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemText
// ====================================================

export interface ContentItemText_styles {
  property: string;
  value: string;
}

export interface ContentItemText {
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: ContentItemText_styles[] | null;
}
