/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemRadio
// ====================================================

export interface ContentItemRadio_styles {
  property: string;
  value: string;
}

export interface ContentItemRadio_choices_renderAsIcon_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemRadio_choices_renderAsIcon_selectedStyles {
  property: string;
  value: string;
}

export interface ContentItemRadio_choices_renderAsIcon_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemRadio_choices_renderAsIcon_innerWrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemRadio_choices_renderAsIcon {
  icon: ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles: ContentItemRadio_choices_renderAsIcon_wrapperStyles[] | null;
  innerWrapperStyles: ContentItemRadio_choices_renderAsIcon_innerWrapperStyles[] | null;
  boxOptionHeight: number | null;
  imageWidth: number | null;
  imageHeight: number | null;
}

export interface ContentItemRadio_choices {
  label: string;
  value: string;
  renderAsIcon: ContentItemRadio_choices_renderAsIcon | null;
}

export interface ContentItemRadio {
  id: string;
  iconOptions: boolean;
  answerKey: string;
  styles: ContentItemRadio_styles[] | null;
  choices: ContentItemRadio_choices[];
}
