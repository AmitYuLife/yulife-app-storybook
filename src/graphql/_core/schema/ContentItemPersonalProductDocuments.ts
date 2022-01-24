/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemPersonalProductDocuments
// ====================================================

export interface ContentItemPersonalProductDocuments_headingImage_image {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductDocuments_headingImage {
  id: string;
  image: ContentItemPersonalProductDocuments_headingImage_image | null;
}

export interface ContentItemPersonalProductDocuments_headingMarkdown {
  id: string;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface ContentItemPersonalProductDocuments_documents_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductDocuments_documents_leftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductDocuments_documents {
  id: string;
  linkLabel: string;
  rightIcon: ContentItemPersonalProductDocuments_documents_rightIcon;
  leftIcon: ContentItemPersonalProductDocuments_documents_leftIcon;
  url: string;
}

export interface ContentItemPersonalProductDocuments {
  id: string;
  headingImage: ContentItemPersonalProductDocuments_headingImage;
  headingMarkdown: ContentItemPersonalProductDocuments_headingMarkdown;
  documents: ContentItemPersonalProductDocuments_documents[];
}
