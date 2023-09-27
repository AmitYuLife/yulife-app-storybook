/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Hint
// ====================================================

export interface Hint_image {
  id: string;
  uri: string | null;
}

export interface Hint {
  id: string;
  title: string;
  description: string;
  image: Hint_image;
  screenBlacklist: string[] | null;
  screenWhitelist: string[] | null;
}
