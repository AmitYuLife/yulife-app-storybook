/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemImage
// ====================================================

export interface ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface ContentItemImage_styles {
  property: string;
  value: string;
}

export interface ContentItemImage {
  id: string;
  image: ContentItemImage_image | null;
  styles: ContentItemImage_styles[] | null;
}
