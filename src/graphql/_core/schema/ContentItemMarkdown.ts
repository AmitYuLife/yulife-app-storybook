/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemMarkdown
// ====================================================

export interface ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface ContentItemMarkdown {
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  styles: ContentItemMarkdown_styles[] | null;
  markdownContainerStyle: ContentItemMarkdown_markdownContainerStyle[] | null;
}
