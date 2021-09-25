/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemGpDetails
// ====================================================

export interface ContentItemGpDetails_onSubmit {
  type: SduiActionType;
}

export interface ContentItemGpDetails {
  id: string;
  answerKey: string;
  onSubmit: ContentItemGpDetails_onSubmit;
}
