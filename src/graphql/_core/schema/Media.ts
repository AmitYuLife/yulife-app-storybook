/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Media
// ====================================================

export interface Media_media {
  id: string;
  uri: string | null;
}

export interface Media_cover {
  id: string;
  uri: string | null;
}

export interface Media_thumbnail {
  id: string;
  uri: string | null;
}

export interface Media_logo {
  id: string;
  uri: string | null;
}

export interface Media {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: number;
  theme: string;
  media: Media_media;
  cover: Media_cover;
  thumbnail: Media_thumbnail;
  logo: Media_logo;
}
