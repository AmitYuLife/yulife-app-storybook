/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { ContentItemMediaOrientation, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemMedia
// ====================================================

export interface ContentItemMedia_source {
  id: string;
  uri: string | null;
}

export interface ContentItemMedia_mediaLogo {
  id: string;
  uri: string | null;
}

export interface ContentItemMedia_poster {
  id: string;
  uri: string | null;
}

export interface ContentItemMedia_videoLogo {
  id: string;
  uri: string | null;
}

export interface ContentItemMedia_thumbnail {
  id: string;
  uri: string | null;
}

export interface ContentItemMedia_lottie_styles {
  property: string;
  value: string;
}

export interface ContentItemMedia_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemMedia_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: ContentItemMedia_lottie_styles[] | null;
  onAnimationEnd: ContentItemMedia_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface ContentItemMedia_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemMedia_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemMedia_onStart {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemMedia_onEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemMedia {
  id: string;
  mediaTitle: string;
  description: string;
  shortDescription: string;
  theme: string;
  orientation: ContentItemMediaOrientation;
  duration: number;
  yuCoin: number | null;
  stars: number | null;
  sourceType: string;
  eventType: string;
  startErrorMessage: string;
  startChallengeButtonLabel: string;
  showTimer: boolean;
  source: ContentItemMedia_source;
  mediaLogo: ContentItemMedia_mediaLogo;
  poster: ContentItemMedia_poster;
  videoLogo: ContentItemMedia_videoLogo | null;
  thumbnail: ContentItemMedia_thumbnail;
  lottie: ContentItemMedia_lottie | null;
  onLeftIconPress: ContentItemMedia_onLeftIconPress | null;
  onRightIconPress: ContentItemMedia_onRightIconPress | null;
  onStart: ContentItemMedia_onStart | null;
  onEnd: ContentItemMedia_onEnd | null;
}
