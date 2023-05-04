/* tslint:disable */

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

export interface ContentItemRadioIcon_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemRadioIcon_innerWrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemRadioIcon {
  icon: ContentItemRadioIcon_icon | null;
  textColor: string;
  selectedStyles: ContentItemRadioIcon_selectedStyles[];
  wrapperStyles: ContentItemRadioIcon_wrapperStyles[] | null;
  innerWrapperStyles: ContentItemRadioIcon_innerWrapperStyles[] | null;
  boxOptionHeight: number | null;
  imageWidth: number | null;
  imageHeight: number | null;
}
