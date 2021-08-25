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

export interface ContentItemRadio_choices_renderAsIcon {
  icon: ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
}

export interface ContentItemRadio_choices {
  label: string;
  value: string | null;
  renderAsIcon: ContentItemRadio_choices_renderAsIcon | null;
}

export interface ContentItemRadio {
  id: string;
  iconOptions: boolean;
  value: string | null;
  answerKey: string;
  choices: (ContentItemRadio_choices | null)[] | null;
}
