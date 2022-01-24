/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemPersonalProductFaqs
// ====================================================

export interface ContentItemPersonalProductFaqs_headingImage_image {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductFaqs_headingImage {
  id: string;
  image: ContentItemPersonalProductFaqs_headingImage_image | null;
}

export interface ContentItemPersonalProductFaqs_headingMarkdown {
  id: string;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface ContentItemPersonalProductFaqs_faqs_content_styles {
  property: string;
  value: string;
}

export interface ContentItemPersonalProductFaqs_faqs_content {
  id: string;
  markdown: string;
  parsedMarkdown: string | null;
  title: string | null;
  styles: ContentItemPersonalProductFaqs_faqs_content_styles[] | null;
}

export interface ContentItemPersonalProductFaqs_faqs_links {
  id: string;
  contentItemDocumentId: string;
  label: string;
}

export interface ContentItemPersonalProductFaqs_faqs {
  id: string;
  accessButtonText: string;
  content: ContentItemPersonalProductFaqs_faqs_content;
  links: ContentItemPersonalProductFaqs_faqs_links[] | null;
}

export interface ContentItemPersonalProductFaqs {
  id: string;
  headingImage: ContentItemPersonalProductFaqs_headingImage;
  headingMarkdown: ContentItemPersonalProductFaqs_headingMarkdown;
  faqs: ContentItemPersonalProductFaqs_faqs[];
}
