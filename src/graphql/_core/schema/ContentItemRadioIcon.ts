/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemRadioIcon
// ====================================================

export interface ContentItemRadioIcon_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemRadioIcon_selectedStyles {
  property: string;
  value: string;
}

export interface ContentItemRadioIcon {
  icon: ContentItemRadioIcon_icon | null;
  textColor: string;
  selectedStyles: ContentItemRadioIcon_selectedStyles[];
}
