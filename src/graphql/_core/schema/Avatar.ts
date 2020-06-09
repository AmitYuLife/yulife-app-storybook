/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvatarBodyType, AvatarPartType } from "./globalTypes";

// ====================================================
// GraphQL query operation: Avatar
// ====================================================

export interface Avatar_listAvatarParts_colors_default_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  nose: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
}

export interface Avatar_listAvatarParts_colors_default {
  colorSchemeId: string;
  colorScheme: Avatar_listAvatarParts_colors_default_colorScheme | null;
}

export interface Avatar_listAvatarParts_colors {
  default: Avatar_listAvatarParts_colors_default | null;
  available: (string | null)[] | null;
}

export interface Avatar_listAvatarParts_elements_attributes {
  name: string;
  value: string;
}

export interface Avatar_listAvatarParts_elements {
  id: string;
  attributes: (Avatar_listAvatarParts_elements_attributes | null)[] | null;
  name: string;
  type: string;
}

export interface Avatar_listAvatarParts {
  partId: string;
  bodyType: AvatarBodyType | null;
  partType: AvatarPartType | null;
  previewViewBox: string | null;
  height: string | null;
  width: string | null;
  colors: Avatar_listAvatarParts_colors | null;
  elements: (Avatar_listAvatarParts_elements | null)[] | null;
}

export interface Avatar_getAvatarColors_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  nose: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
}

export interface Avatar_getAvatarColors {
  colorSchemeId: string;
  colorScheme: Avatar_getAvatarColors_colorScheme | null;
}

export interface Avatar {
  listAvatarParts: (Avatar_listAvatarParts | null)[] | null;
  getAvatarColors: (Avatar_getAvatarColors | null)[] | null;
}

export interface AvatarVariables {
  bodyType?: AvatarBodyType | null;
  partType?: AvatarPartType | null;
  colorSchemeIds?: (string | null)[] | null;
}
