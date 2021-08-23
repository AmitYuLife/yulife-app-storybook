/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemInfoCard
// ====================================================

export interface ContentItemInfoCard_image {
  id: string;
  uri: string | null;
}

export interface ContentItemInfoCard_styles {
  property: string;
  value: string;
}

export interface ContentItemInfoCard {
  id: string;
  image: ContentItemInfoCard_image | null;
  markdown: string;
  styles: ContentItemInfoCard_styles[] | null;
}
