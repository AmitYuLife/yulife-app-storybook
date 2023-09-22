/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

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

export interface Media_videoLogo {
  id: string;
  uri: string | null;
}

export interface Media_lottie_styles {
  property: string;
  value: string;
}

export interface Media_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface Media_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: Media_lottie_styles[] | null;
  onAnimationEnd: Media_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface Media {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: number | null;
  tag: string | null;
  theme: string;
  media: Media_media;
  cover: Media_cover;
  thumbnail: Media_thumbnail;
  logo: Media_logo | null;
  videoLogo: Media_videoLogo | null;
  lottie: Media_lottie | null;
  sourceType: string | null;
}
