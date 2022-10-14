/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

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

export interface GetMedia_getMedia_videoLogo {
  id: string;
  uri: string | null;
}

export interface GetMedia_getMedia_lottie_styles {
  property: string;
  value: string;
}

export interface GetMedia_getMedia_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetMedia_getMedia_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetMedia_getMedia_lottie_styles[] | null;
  onAnimationEnd: GetMedia_getMedia_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetMedia_getMedia {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: number | null;
  theme: string;
  media: GetMedia_getMedia_media;
  cover: GetMedia_getMedia_cover;
  thumbnail: GetMedia_getMedia_thumbnail;
  logo: GetMedia_getMedia_logo | null;
  videoLogo: GetMedia_getMedia_videoLogo | null;
  lottie: GetMedia_getMedia_lottie | null;
  sourceType: string | null;
}

export interface GetMedia {
  getMedia: (GetMedia_getMedia | null)[] | null;
}

export interface GetMediaVariables {
  tags?: (string | null)[] | null;
}
