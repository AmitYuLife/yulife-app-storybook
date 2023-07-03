/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemShowHideBalance
// ====================================================

export interface ContentItemShowHideBalance_styles {
  property: string;
  value: string;
}

export interface ContentItemShowHideBalance_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemShowHideBalance {
  id: string;
  value: string;
  currency: string;
  description: string | null;
  descriptionValue: string | null;
  styles: ContentItemShowHideBalance_styles[] | null;
  wrapperStyles: ContentItemShowHideBalance_wrapperStyles[] | null;
}
