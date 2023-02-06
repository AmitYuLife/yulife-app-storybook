/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPersonalProductStepDetachedDocuments
// ====================================================

export interface GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemMarkdown {
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
    | "ContentItemPersonalProductReviewItem"
    | "ContentItemPersonalProductFaqs"
    | "ContentItemPackageCards"
    | "ContentItemSelectedPackageCard"
    | "ContentItemProcessingTimer"
    | "ContentItemPersonalProductPreview"
    | "ContentItemCoverPicker"
    | "ContentItemAgePercentCoverPicker"
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
    | "ContentItemYuCoinPower"
    | "ContentItemProgressSteps"
    | "ContentItemCostPayoutBenefitCard"
    | "ContentItemCollapsingHeaderAgePercentProductInfo"
    | "ContentItemPerks"
    | "ContentItemAppDownloadPrompt"
    | "ContentItemPerksComparison";
}

export interface GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_headingImage_image {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_headingImage {
  id: string;
  image: GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_headingImage_image | null;
}

export interface GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_headingMarkdown {
  id: string;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_documents_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_documents_leftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_documents {
  id: string;
  linkLabel: string;
  rightIcon: GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_documents_rightIcon;
  leftIcon: GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_documents_leftIcon;
  url: string;
}

export interface GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments {
  __typename: "ContentItemPersonalProductDocuments";
  id: string;
  headingImage: GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_headingImage;
  headingMarkdown: GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_headingMarkdown;
  documents: GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments_documents[];
}

export type GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body =
  | GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemMarkdown
  | GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body_ContentItemPersonalProductDocuments;

export interface GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments {
  stepId: string;
  customerProductId: string;
  /**
   * Content displayed inside the scrollview area
   */
  body: (GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body | null)[] | null;
}

export interface GetPersonalProductStepDetachedDocuments {
  /**
   * @Deprecated - Use the generic getPersonalProductStepDetached with Documents stepId
   */
  getPersonalProductStepDetachedDocuments: GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments | null;
}

export interface GetPersonalProductStepDetachedDocumentsVariables {
  productId: string;
}
