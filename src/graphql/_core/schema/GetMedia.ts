/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMedia
// ====================================================

export interface GetMedia_getMedia_media {
  id: string;
  uri: string | null;
}

export interface GetMedia_getMedia_cover {
  id: string;
  uri: string | null;
}

export interface GetMedia_getMedia_thumbnail {
  id: string;
  uri: string | null;
}

export interface GetMedia_getMedia_logo {
  id: string;
  uri: string | null;
}

export interface GetMedia_getMedia {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: number;
  theme: string;
  media: GetMedia_getMedia_media;
  cover: GetMedia_getMedia_cover;
  thumbnail: GetMedia_getMedia_thumbnail;
  logo: GetMedia_getMedia_logo;
}

export interface GetMedia {
  getMedia: (GetMedia_getMedia | null)[] | null;
}

export interface GetMediaVariables {
  tags?: (string | null)[] | null;
}
