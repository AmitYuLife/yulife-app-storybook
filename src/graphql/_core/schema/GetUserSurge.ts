/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUserSurge
// ====================================================

export interface GetUserSurge_getUserSurge_lottie_styles {
  property: string;
  value: string;
}

export interface GetUserSurge_getUserSurge_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetUserSurge_getUserSurge_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetUserSurge_getUserSurge_lottie_styles[] | null;
  onAnimationEnd: GetUserSurge_getUserSurge_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetUserSurge_getUserSurge {
  endDateTime: string;
  multiplier: string;
  title: string;
  description: string;
  lottie: GetUserSurge_getUserSurge_lottie;
}

export interface GetUserSurge {
  getUserSurge: GetUserSurge_getUserSurge;
}
