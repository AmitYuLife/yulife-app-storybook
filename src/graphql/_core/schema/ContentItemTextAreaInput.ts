/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemTextAreaInput
// ====================================================

export interface ContentItemTextAreaInput_styles {
  property: string;
  value: string;
}

export interface ContentItemTextAreaInput {
  id: string;
  answerKey: string;
  placeholder: string | null;
  numberOfLines: number | null;
  maxLength: number;
  styles: ContentItemTextAreaInput_styles[] | null;
}
