/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import {
  ContentItemFormTextInputType,
  CoverType,
  ContentItemButtonType,
  SduiActionType,
  ContentItemButtonSize,
  YuProductStatus,
  RNViewPointerEvents,
  ContentItemRowIconTextBannerType,
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPersonalProductStepDetached
// ====================================================

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemLottie {
  __typename:
    | "ContentItemLottie"
    | "ContentItemProgressBar"
    | "ContentItemHeaderBar"
    | "ContentItemRadio"
    | "ContentItemInfoCard"
    | "ContentItemInfoButton"
    | "ContentItemMultiButton"
    | "ContentItemImage"
    | "ContentItemOverlay"
    | "ContentItemPersonalProductInfo"
    | "ContentItemYugiConfirm"
    | "ContentItemDatePicker"
    | "ContentItemScrollPicker"
    | "ContentItemMultiSelect"
    | "ContentItemPersonalProductReviewItem"
    | "ContentItemPackageCards"
    | "ContentItemProcessingTimer"
    | "ContentItemPersonalProductPreview"
    | "ContentItemAgePercentCoverPicker"
    | "ContentItemScrollableItemsPicker"
    | "ContentItemConfirm"
    | "ContentItemCollapsingHeaderProductInfo"
    | "ContentItemList"
    | "ContentItemFullScreenSwiper"
    | "ContentItemFullScreenLottieSwiper"
    | "ContentItemGpDetails"
    | "ContentItemPackageCardPower"
    | "ContentItemPersonalProductSelectPaymentButton"
    | "ContentItemSearchPostcode"
    | "ContentItemForm"
    | "ContentItemFade"
    | "ContentItemYuCoinPower"
    | "ContentItemProgressSteps"
    | "ContentItemCostPayoutBenefitCard"
    | "ContentItemCollapsingHeaderAgePercentProductInfo"
    | "ContentItemPerks"
    | "ContentItemAppDownloadPrompt"
    | "ContentItemPerksComparison";
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

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemText_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemText_styles[] | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemTextInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemTextInput_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemTextInput {
  __typename: "ContentItemTextInput";
  id: string;
  heading: string | null;
  answerKey: string;
  type: ContentItemFormTextInputType | null;
  prefixValue: string | null;
  validation:
    | (GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemTextInput_validation | null)[]
    | null;
  /**
   * Supported RN version 3.58.0
   */
  styles: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemTextInput_styles[] | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_options {
  value: number;
  coverType: CoverType;
  subheading: string;
  heading: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_coverPickerTitle_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_coverPickerTitle {
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_coverPickerTitle_styles[]
    | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_containerStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_onPress | null;
  event: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_event | null;
  icon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_icon | null;
  contentItemButtonRightIcon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_contentItemButtonRightIcon | null;
  styles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_styles[]
    | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button_containerStyles[]
    | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_range {
  min: number;
  max: number;
  step: number;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_coverMap {
  coverType: CoverType;
  max: number;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_item {
  color: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_backdropStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_overlayTitleWrapperStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay {
  backdropStyles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_backdropStyles[]
    | null;
  highlightLabel: string;
  highlightLabelColor: string;
  overlayTitle: string;
  overlayTitleWrapperStyles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_overlayTitleWrapperStyles[]
    | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants {
  id: string;
  minVisibleIndex: number | null;
  maxVisibleIndex: number | null;
  item: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_item;
  overlay: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker {
  id: string;
  answerKey: string;
  styles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styles[]
    | null;
  range: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_range;
  coverMap: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_coverMap[];
  styleVariants:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants[]
    | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover {
  title: string;
  button: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_button;
  itemsPicker: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover_itemsPicker;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker {
  __typename: "ContentItemCoverPicker";
  id: string;
  answerKey: string;
  answerKeyDefaultValue: number;
  hasSelectedCustomCover: boolean;
  styles: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_styles[] | null;
  options: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_options[] | null;
  coverPickerTitle: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_coverPickerTitle;
  customCover: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker_customCover | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_providerLogo_url {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_providerLogo {
  url: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_providerLogo_url | null;
  width: number | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_slotInfo_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_slotInfo_logoUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_slotInfo {
  name: string;
  status: YuProductStatus;
  backgroundUrl: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_slotInfo_backgroundUrl;
  logoUrl: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_slotInfo_logoUrl | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard {
  __typename: "ContentItemSelectedPackageCard";
  id: string;
  previousPrice: string | null;
  price: string;
  priceDescription: string;
  coverType: CoverType;
  backgroundUrl: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_backgroundUrl;
  providerLogo: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_providerLogo | null;
  slotInfo: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard_slotInfo;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_providerLogo_url {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_providerLogo {
  url: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_providerLogo_url | null;
  width: number | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_coverOptions_slotInfo_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_coverOptions_slotInfo_logoUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_coverOptions_slotInfo {
  name: string;
  status: YuProductStatus;
  backgroundUrl: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_coverOptions_slotInfo_backgroundUrl;
  logoUrl: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_coverOptions_slotInfo_logoUrl | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_coverOptions {
  coverType: CoverType;
  price: string;
  slotInfo: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_coverOptions_slotInfo;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards {
  __typename: "ContentItemSelectedPackageCards";
  id: string;
  styles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_styles[]
    | null;
  providerLogo: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_providerLogo | null;
  packageCardsPriceDescription: string | null;
  coverOptions:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards_coverOptions[]
    | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_headerIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_infoIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_coverOptions_items_info_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_coverOptions_items_info {
  onPress: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_coverOptions_items_info_onPress | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_coverOptions_items {
  leftText: string;
  rightTextBody: string | null;
  rightTextLabel: string | null;
  info: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_coverOptions_items_info | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_coverOptions {
  coverType: CoverType;
  subheading: string | null;
  items: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_coverOptions_items[];
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion {
  __typename: "ContentItemSelectedPackageAccordion";
  id: string;
  heading: string | null;
  headerIcon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_headerIcon | null;
  infoIcon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_infoIcon | null;
  styles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_styles[]
    | null;
  coverOptions:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion_coverOptions[]
    | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton {
  __typename: "ContentItemButton";
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_onPress | null;
  event: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_event | null;
  icon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton_containerStyles[]
    | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPad_styles[] | null;
  dynamicStyles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPad_dynamicStyles[]
    | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemMarkdown_markdownContainerStyle[]
    | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_containerStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_onPress | null;
  event: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_event | null;
  icon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_icon | null;
  contentItemButtonRightIcon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon | null;
  styles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_styles[]
    | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton_containerStyles[]
    | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_containerActions {
  id: string;
  event: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_containerActions_event | null;
  onPress: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_containerActions_onPress;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner {
  __typename: "ContentItemRowIconTextBanner";
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerIcon;
  styles:
    | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_styles[]
    | null;
  /**
   * RN client version >= 3.45.0
   */
  titleMarkdown: string | null;
  /**
   * RN client version >= 3.45.0
   */
  showCloseIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   */
  bannerButton: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_bannerButton | null;
  /**
   * RN client version >= 3.45.0: icon field is required, so showIcon is used
   * here for backward compatibility to conditionally hide the icon
   */
  showIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner_containerActions | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemDropdownInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemDropdownInput_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemDropdownInput_dropdownOptions {
  label: string | null;
  value: string | null;
}

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemDropdownInput {
  __typename: "ContentItemDropdownInput";
  id: string;
  heading: string | null;
  answerKey: string;
  validation:
    | (GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemDropdownInput_validation | null)[]
    | null;
  styles: GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemDropdownInput_styles[] | null;
  dropdownOptions: (GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemDropdownInput_dropdownOptions | null)[];
  selectInstruction: string | null;
}

export type GetPersonalProductStepDetached_getPersonalProductStepDetached_body =
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemLottie
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductFaqs
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPersonalProductDocuments
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemText
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemTextInput
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemCoverPicker
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCard
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageCards
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemSelectedPackageAccordion
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemButton
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemPad
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemMarkdown
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemRowIconTextBanner
  | GetPersonalProductStepDetached_getPersonalProductStepDetached_body_ContentItemDropdownInput;

export interface GetPersonalProductStepDetached_getPersonalProductStepDetached {
  stepId: string;
  customerProductId: string;
  stepData: string | null;
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
