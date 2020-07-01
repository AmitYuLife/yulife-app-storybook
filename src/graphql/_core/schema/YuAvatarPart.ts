/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: YuAvatarPart
// ====================================================

export interface YuAvatarPart_elements_attributes {
  name: string;
  value: string;
}

export interface YuAvatarPart_elements {
  name: string;
  attributes: (YuAvatarPart_elements_attributes | null)[] | null;
}

export interface YuAvatarPart {
  partId: string;
  elements: (YuAvatarPart_elements | null)[] | null;
}
