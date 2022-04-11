/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemConfirmCheckboxType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemConfirm
// ====================================================

export interface ContentItemConfirm_styles {
  property: string;
  value: string;
}

export interface ContentItemConfirm {
  id: string;
  confirmLabel: string;
  answerKey: string;
  checkboxType: ContentItemConfirmCheckboxType | null;
  styles: ContentItemConfirm_styles[] | null;
}
