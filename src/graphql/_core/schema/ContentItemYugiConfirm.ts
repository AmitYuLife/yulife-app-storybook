/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemYugiConfirm
// ====================================================

export interface ContentItemYugiConfirm_content_styles {
  property: string;
  value: string;
}

export interface ContentItemYugiConfirm_content_markdownContainerStyle {
  property: string;
  value: string;
}

export interface ContentItemYugiConfirm_content {
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  styles: ContentItemYugiConfirm_content_styles[] | null;
  markdownContainerStyle: ContentItemYugiConfirm_content_markdownContainerStyle[] | null;
}

export interface ContentItemYugiConfirm_buttonOnPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemYugiConfirm {
  id: string;
  yugiHeading: string;
  content: ContentItemYugiConfirm_content;
  buttonText: string;
  buttonOnPress: ContentItemYugiConfirm_buttonOnPress | null;
}
