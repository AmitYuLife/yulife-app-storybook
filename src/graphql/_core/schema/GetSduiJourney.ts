/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  ContentItemButtonType,
  SduiActionType,
  ContentItemButtonSize,
  ContentItemImageSize,
  ContentItemFormTextInputType,
  ContentItemRowIconTextBannerType,
  RNViewPointerEvents,
  ContentItemProgressBarType,
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSduiJourney
// ====================================================

export interface GetSduiJourney_getSduiJourney_body_ContentItemTable {
  __typename: "ContentItemTable" | "ContentItemSelectedPackageCard" | "ContentItemSectionHeading";
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle: GetSduiJourney_getSduiJourney_body_ContentItemMarkdown_markdownContainerStyle[] | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemButton {
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
  onPress: GetSduiJourney_getSduiJourney_body_ContentItemButton_onPress | null;
  event: GetSduiJourney_getSduiJourney_body_ContentItemButton_event | null;
  icon: GetSduiJourney_getSduiJourney_body_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetSduiJourney_getSduiJourney_body_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemButton_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetSduiJourney_getSduiJourney_body_ContentItemImage_image | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemImage_styles[] | null;
  wrapperStyles: GetSduiJourney_getSduiJourney_body_ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: GetSduiJourney_getSduiJourney_body_ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation:
    | (GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormTextInput_validation | null)[]
    | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption | null;
  icon: GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  options: (GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  validation:
    | (GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[]
    | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type GetSduiJourney_getSduiJourney_body_ContentItemForm_elements =
  | GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormTextInput
  | GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSelectInput
  | GetSduiJourney_getSduiJourney_body_ContentItemForm_elements_ContentItemFormSubmitButton;

export interface GetSduiJourney_getSduiJourney_body_ContentItemForm {
  __typename: "ContentItemForm";
  elements: (GetSduiJourney_getSduiJourney_body_ContentItemForm_elements | null)[] | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemText_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemText_styles[] | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemTextInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemTextInput_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemTextInput {
  __typename: "ContentItemTextInput";
  id: string;
  heading: string | null;
  answerKey: string;
  type: ContentItemFormTextInputType | null;
  prefixValue: string | null;
  validation: (GetSduiJourney_getSduiJourney_body_ContentItemTextInput_validation | null)[] | null;
  /**
   * Supported RN version 3.58.0
   */
  styles: GetSduiJourney_getSduiJourney_body_ContentItemTextInput_styles[] | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_onPress | null;
  event: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_event | null;
  icon: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_icon | null;
  contentItemButtonRightIcon: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_containerActions {
  id: string;
  event: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_containerActions_event | null;
  onPress: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_containerActions_onPress;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner {
  __typename: "ContentItemRowIconTextBanner";
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerIcon;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_styles[] | null;
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
  bannerButton: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton | null;
  /**
   * RN client version >= 3.45.0: icon field is required, so showIcon is used
   * here for backward compatibility to conditionally hide the icon
   */
  showIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_containerActions | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemLottie_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemLottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemLottie {
  __typename: "ContentItemLottie";
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemLottie_styles[] | null;
  onAnimationEnd: GetSduiJourney_getSduiJourney_body_ContentItemLottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemPad_styles[] | null;
  dynamicStyles: GetSduiJourney_getSduiJourney_body_ContentItemPad_dynamicStyles[] | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRadio_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_selectedStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon {
  icon: GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles: GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_wrapperStyles[] | null;
  boxOptionHeight: number | null;
  imageWidth: number | null;
  imageHeight: number | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices {
  label: string;
  value: string;
  renderAsIcon: GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRadio {
  __typename: "ContentItemRadio";
  id: string;
  iconOptions: boolean;
  answerKey: string;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemRadio_styles[] | null;
  choices: GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices[];
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemHeaderBar_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemHeaderBar_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemHeaderBar {
  __typename: "ContentItemHeaderBar";
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: GetSduiJourney_getSduiJourney_body_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: GetSduiJourney_getSduiJourney_body_ContentItemHeaderBar_onRightIconPress | null;
  publishKeyHeight: string | null;
  /**
   * Supported RN version 3.63.0
   */
  color: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
  publishKeyHeight: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_items_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_items_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_items_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_items_labelStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_items {
  label: string;
  onPress: GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_items_onPress | null;
  rightIcon: GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_items_rightIcon | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_items_styles[] | null;
  labelStyles: GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_items_labelStyles[] | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemTextGroup {
  __typename: "ContentItemTextGroup";
  id: string;
  items: GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_items[];
  styles: GetSduiJourney_getSduiJourney_body_ContentItemTextGroup_styles[] | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemAccordion_headerIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemAccordion_infoIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemAccordion_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemAccordion_items_info_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemAccordion_items_info {
  onPress: GetSduiJourney_getSduiJourney_body_ContentItemAccordion_items_info_onPress | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemAccordion_items {
  leftText: string;
  rightTextBody: string | null;
  rightTextLabel: string | null;
  info: GetSduiJourney_getSduiJourney_body_ContentItemAccordion_items_info | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemAccordion {
  __typename: "ContentItemAccordion";
  id: string;
  heading: string | null;
  headerIcon: GetSduiJourney_getSduiJourney_body_ContentItemAccordion_headerIcon | null;
  infoIcon: GetSduiJourney_getSduiJourney_body_ContentItemAccordion_infoIcon | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemAccordion_styles[] | null;
  items: GetSduiJourney_getSduiJourney_body_ContentItemAccordion_items[];
  subheading: string | null;
}

export type GetSduiJourney_getSduiJourney_body =
  | GetSduiJourney_getSduiJourney_body_ContentItemTable
  | GetSduiJourney_getSduiJourney_body_ContentItemMarkdown
  | GetSduiJourney_getSduiJourney_body_ContentItemBox
  | GetSduiJourney_getSduiJourney_body_ContentItemButton
  | GetSduiJourney_getSduiJourney_body_ContentItemImage
  | GetSduiJourney_getSduiJourney_body_ContentItemForm
  | GetSduiJourney_getSduiJourney_body_ContentItemText
  | GetSduiJourney_getSduiJourney_body_ContentItemTextInput
  | GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner
  | GetSduiJourney_getSduiJourney_body_ContentItemLottie
  | GetSduiJourney_getSduiJourney_body_ContentItemPad
  | GetSduiJourney_getSduiJourney_body_ContentItemRadio
  | GetSduiJourney_getSduiJourney_body_ContentItemHeaderBar
  | GetSduiJourney_getSduiJourney_body_ContentItemProgressBar
  | GetSduiJourney_getSduiJourney_body_ContentItemTextGroup
  | GetSduiJourney_getSduiJourney_body_ContentItemAccordion;

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTable {
  __typename: "ContentItemTable" | "ContentItemSelectedPackageCard" | "ContentItemSectionHeading";
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle:
    | GetSduiJourney_getSduiJourney_absolute_item_ContentItemMarkdown_markdownContainerStyle[]
    | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton {
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
  onPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_onPress | null;
  event: GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_event | null;
  icon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage_image | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage_styles[] | null;
  wrapperStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation:
    | (GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormTextInput_validation | null)[]
    | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption | null;
  icon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  options: (GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  validation:
    | (GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[]
    | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements =
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormTextInput
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements_ContentItemFormSubmitButton;

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm {
  __typename: "ContentItemForm";
  elements: (GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm_elements | null)[] | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemText_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemText_styles[] | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextInput_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextInput {
  __typename: "ContentItemTextInput";
  id: string;
  heading: string | null;
  answerKey: string;
  type: ContentItemFormTextInputType | null;
  prefixValue: string | null;
  validation: (GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextInput_validation | null)[] | null;
  /**
   * Supported RN version 3.58.0
   */
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextInput_styles[] | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_onPress | null;
  event: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_event | null;
  icon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_icon | null;
  contentItemButtonRightIcon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_containerActions {
  id: string;
  event: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_containerActions_event | null;
  onPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_containerActions_onPress;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner {
  __typename: "ContentItemRowIconTextBanner";
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerIcon;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_styles[] | null;
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
  bannerButton: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton | null;
  /**
   * RN client version >= 3.45.0: icon field is required, so showIcon is used
   * here for backward compatibility to conditionally hide the icon
   */
  showIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_containerActions | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemLottie_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemLottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemLottie {
  __typename: "ContentItemLottie";
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemLottie_styles[] | null;
  onAnimationEnd: GetSduiJourney_getSduiJourney_absolute_item_ContentItemLottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemPad_styles[] | null;
  dynamicStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemPad_dynamicStyles[] | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices_renderAsIcon_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices_renderAsIcon_selectedStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices_renderAsIcon_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices_renderAsIcon {
  icon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles:
    | GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices_renderAsIcon_wrapperStyles[]
    | null;
  boxOptionHeight: number | null;
  imageWidth: number | null;
  imageHeight: number | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices {
  label: string;
  value: string;
  renderAsIcon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices_renderAsIcon | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio {
  __typename: "ContentItemRadio";
  id: string;
  iconOptions: boolean;
  answerKey: string;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_styles[] | null;
  choices: GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices[];
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemHeaderBar_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemHeaderBar_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemHeaderBar {
  __typename: "ContentItemHeaderBar";
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemHeaderBar_onRightIconPress | null;
  publishKeyHeight: string | null;
  /**
   * Supported RN version 3.63.0
   */
  color: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
  publishKeyHeight: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_items_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_items_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_items_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_items_labelStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_items {
  label: string;
  onPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_items_onPress | null;
  rightIcon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_items_rightIcon | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_items_styles[] | null;
  labelStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_items_labelStyles[] | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup {
  __typename: "ContentItemTextGroup";
  id: string;
  items: GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_items[];
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup_styles[] | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_headerIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_infoIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_items_info_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_items_info {
  onPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_items_info_onPress | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_items {
  leftText: string;
  rightTextBody: string | null;
  rightTextLabel: string | null;
  info: GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_items_info | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion {
  __typename: "ContentItemAccordion";
  id: string;
  heading: string | null;
  headerIcon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_headerIcon | null;
  infoIcon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_infoIcon | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_styles[] | null;
  items: GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion_items[];
  subheading: string | null;
}

export type GetSduiJourney_getSduiJourney_absolute_item =
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemTable
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemMarkdown
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemBox
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemText
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextInput
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemLottie
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemPad
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemHeaderBar
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemProgressBar
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion;

export interface GetSduiJourney_getSduiJourney_absolute_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface GetSduiJourney_getSduiJourney_absolute {
  isBackground: boolean | null;
  item: GetSduiJourney_getSduiJourney_absolute_item;
  styles: GetSduiJourney_getSduiJourney_absolute_styles[] | null;
  dynamicStyles: GetSduiJourney_getSduiJourney_absolute_dynamicStyles[] | null;
}

export interface GetSduiJourney_getSduiJourney_containerStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney {
  stepId: string;
  stepData: string | null;
  body: GetSduiJourney_getSduiJourney_body[] | null;
  absolute: GetSduiJourney_getSduiJourney_absolute[] | null;
  containerStyles: GetSduiJourney_getSduiJourney_containerStyles[] | null;
}

export interface GetSduiJourney {
  getSduiJourney: GetSduiJourney_getSduiJourney | null;
}

export interface GetSduiJourneyVariables {
  journeyId: string;
}
