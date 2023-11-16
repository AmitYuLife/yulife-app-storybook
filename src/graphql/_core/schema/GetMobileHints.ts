/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMobileHints
// ====================================================

export interface GetMobileHints_getMobileHints_image {
  id: string;
  uri: string | null;
}

export interface GetMobileHints_getMobileHints {
  id: string;
  title: string;
  description: string;
  image: GetMobileHints_getMobileHints_image;
  screenBlacklist: string[] | null;
  screenWhitelist: string[] | null;
}

export interface GetMobileHints {
  getMobileHints: GetMobileHints_getMobileHints[] | null;
}
