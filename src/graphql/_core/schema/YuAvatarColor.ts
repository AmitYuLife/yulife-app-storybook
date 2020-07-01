/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: YuAvatarColor
// ====================================================

export interface YuAvatarColor_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface YuAvatarColor {
  colorSchemeId: string;
  colorScheme: YuAvatarColor_colorScheme | null;
}
