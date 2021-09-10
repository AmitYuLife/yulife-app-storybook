/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemRadio
// ====================================================

export interface ContentItemRadio_choices_renderAsIcon_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemRadio_choices_renderAsIcon_selectedStyles {
  property: string;
  value: string;
}

export interface ContentItemRadio_choices_renderAsIcon {
  icon: ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: ContentItemRadio_choices_renderAsIcon_selectedStyles[];
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
  choices: ContentItemRadio_choices[];
}
