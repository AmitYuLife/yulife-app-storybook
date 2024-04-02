/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemSliderInput
// ====================================================

export interface ContentItemSliderInput_styles {
  property: string;
  value: string;
}

export interface ContentItemSliderInput {
  id: string;
  answerKey: string;
  minValue: number;
  maxValue: number;
  leftLabel: string;
  rightLabel: string;
  styles: ContentItemSliderInput_styles[] | null;
}
