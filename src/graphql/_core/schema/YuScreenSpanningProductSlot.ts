/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: YuScreenSpanningProductSlot
// ====================================================

export interface YuScreenSpanningProductSlot_images_image {
  id: string;
  uri: string | null;
}

export interface YuScreenSpanningProductSlot_images {
  image: YuScreenSpanningProductSlot_images_image;
  width: number;
  height: number | null;
}

export interface YuScreenSpanningProductSlot {
  heading: string | null;
  images: YuScreenSpanningProductSlot_images[] | null;
}
