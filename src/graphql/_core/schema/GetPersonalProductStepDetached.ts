/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPersonalProductStepDetached
// ====================================================

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemMarkdown {
  __typename:
    | "ContentItemMarkdown"
    | "ContentItemLottie"
    | "ContentItemText"
    | "ContentItemTextInput"
    | "ContentItemProgressBar"
    | "ContentItemHeaderBar"
    | "ContentItemRadio"
    | "ContentItemInfoCard"
    | "ContentItemInfoButton"
    | "ContentItemButton"
    | "ContentItemMultiButton"
    | "ContentItemPad"
    | "ContentItemImage"
    | "ContentItemOverlay"
    | "ContentItemPersonalProductInfo"
    | "ContentItemYugiConfirm"
    | "ContentItemDatePicker"
    | "ContentItemScrollPicker"
    | "ContentItemMultiSelect"
    | "ContentItemPersonalProductConfirm"
    | "ContentItemPersonalProductReviewItem"
    | "ContentItemPackageCards"
    | "ContentItemSelectedPackageCard"
    | "ContentItemPersonalProductPreview"
    | "ContentItemCoverPicker"
    | "ContentItemScrollableItemsPicker"
    | "ContentItemConfirm"
    | "ContentItemCollapsingHeaderProductInfo"
    | "ContentItemList"
    | "ContentItemRowIconTextBanner"
    | "ContentItemFullScreenSwiper"
    | "ContentItemFullScreenLottieSwiper"
    | "ContentItemGpDetails"
    | "ContentItemPackageCardPower"
    | "ContentItemPersonalProductSelectPaymentButton"
    | "ContentItemSearchPostcode"
    | "ContentItemForm"
    | "ContentItemSelectedPackageAccordion"
    | "ContentItemFade"
    | "ContentItemSelectedPackageCards"
    | "ContentItemProcessingTimer"
    | "ContentItemYuCoinPower";
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_headingImage_image {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_headingImage {
  id: string;
  image: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_headingImage_image | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_headingMarkdown {
  id: string;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_faqs_content_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_faqs_content {
  id: string;
  markdown: string;
  parsedMarkdown: string | null;
  title: string | null;
  styles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_faqs_content_styles[]
    | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_faqs_links {
  id: string;
  contentItemDocumentId: string;
  label: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_faqs {
  id: string;
  accessButtonText: string;
  content: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_faqs_content;
  links:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_faqs_links[]
    | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs {
  __typename: "ContentItemPersonalProductFaqs";
  id: string;
  headingImage: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_headingImage;
  headingMarkdown: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_headingMarkdown;
  faqs: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs_faqs[];
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_headingImage_image {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_headingImage {
  id: string;
  image: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_headingImage_image | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_headingMarkdown {
  id: string;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_documents_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_documents_leftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_documents {
  id: string;
  linkLabel: string;
  rightIcon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_documents_rightIcon;
  leftIcon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_documents_leftIcon;
  url: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments {
  __typename: "ContentItemPersonalProductDocuments";
  id: string;
  headingImage: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_headingImage;
  headingMarkdown: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_headingMarkdown;
  documents: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments_documents[];
}

export type GetPersonalProductStepDetached_getPersonalProductStepDetached_body =
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemMarkdown
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments;

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached {
  stepId: string;
  customerProductId: string;
  /**
   * Content displayed inside the scrollview area
   */
  body: (GetPersonalProductStepDetached_getPersonalProductStepDetached_body | null)[] | null;
}

export interface GetPersonalProductStepDetached {
  getPersonalProductStepDetached: GetPersonalProductStepDetached_getPersonalProductStepDetached | null;
}

export interface GetPersonalProductStepDetachedVariables {
  productId: string;
  stepId: string;
}
