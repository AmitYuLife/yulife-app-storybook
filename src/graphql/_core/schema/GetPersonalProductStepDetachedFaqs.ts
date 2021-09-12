/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPersonalProductStepDetachedFaqs
// ====================================================

export interface GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemMarkdown {
  __typename:
    | "ContentItemMarkdown"
    | "ContentItemLottie"
    | "ContentItemText"
    | "ContentItemTextInput"
    | "ContentItemProgressBar"
    | "ContentItemHeaderBar"
    | "ContentItemRadio"
    | "ContentItemInfoCard"
    | "ContentItemButton"
    | "ContentItemMultiButton"
    | "ContentItemPad"
    | "ContentItemImage"
    | "ContentItemOverlay"
    | "ContentItemPersonalProductInfo"
    | "ContentItemYugiConfirm"
    | "ContentItemYugiReminder"
    | "ContentItemDatePicker"
    | "ContentItemScrollPicker"
    | "ContentItemMultiSelect"
    | "ContentItemPersonalProductConfirm"
    | "ContentItemPersonalProductReviewItem"
    | "ContentItemPersonalProductDocuments"
    | "ContentItemPackageCards"
    | "ContentItemPersonalProductPreview"
    | "ContentItemCoverPicker"
    | "ContentItemScrollableItemsPicker"
    | "ContentItemConfirm";
}

export interface GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_headingImage_image {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_headingImage {
  id: string;
  image: GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_headingImage_image | null;
}

export interface GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_headingMarkdown {
  id: string;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_faqs_content {
  id: string;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_faqs_links {
  id: string;
  contentItemDocumentId: string;
  label: string;
}

export interface GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_faqs {
  id: string;
  accessButtonText: string;
  content: GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_faqs_content;
  links:
    | GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_faqs_links[]
    | null;
}

export interface GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs {
  __typename: "ContentItemPersonalProductFaqs";
  id: string;
  headingImage: GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_headingImage;
  headingMarkdown: GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_headingMarkdown;
  faqs: GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_faqs[];
}

export type GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body =
  | GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemMarkdown
  | GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs;

export interface GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs {
  stepId: string;
  customerProductId: string;
  /**
   * Content displayed inside the scrollview area
   */
  body: (GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body | null)[] | null;
}

export interface GetPersonalProductStepDetachedFaqs {
  getPersonalProductStepDetachedFaqs: GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs | null;
}

export interface GetPersonalProductStepDetachedFaqsVariables {
  productId: string;
}
