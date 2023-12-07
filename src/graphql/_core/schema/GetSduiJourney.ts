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
  ContentItemMediaOrientation,
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSduiJourney
// ====================================================

export interface GetSduiJourney_getSduiJourney_body_ContentItemProcessingTimer {
  __typename:
    | "ContentItemProcessingTimer"
    | "ContentItemTable"
    | "ContentItemSelectedPackageCard"
    | "ContentItemSectionHeading"
    | "ContentItemYuCoinPower"
    | "ContentItemComparisonTableSelectPackage"
    | "ContentItemPerks"
    | "ContentItemPill"
    | "ContentItemSexPicker"
    | "ContentItemDependants"
    | "ContentItemSelectScheme"
    | "ContentItemKeyValueBox"
    | "ContentItemStages"
    | "ContentItemMarkdownBlock";
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

export interface GetSduiJourney_getSduiJourney_body_ContentItemButton_containerStyles {
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
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: GetSduiJourney_getSduiJourney_body_ContentItemButton_containerStyles[] | null;
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
  /**
   * Supported RN Version 3.101
   */
  dynamicStyleKey: string | null;
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

export interface GetSduiJourney_getSduiJourney_body_ContentItemDropdownInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemDropdownInput_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemDropdownInput_dropdownOptions {
  label: string | null;
  value: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemDropdownInput {
  __typename: "ContentItemDropdownInput";
  id: string;
  heading: string | null;
  answerKey: string;
  validation: (GetSduiJourney_getSduiJourney_body_ContentItemDropdownInput_validation | null)[] | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemDropdownInput_styles[] | null;
  dropdownOptions: (GetSduiJourney_getSduiJourney_body_ContentItemDropdownInput_dropdownOptions | null)[];
  selectInstruction: string | null;
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

export interface GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_containerStyles {
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
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner_bannerButton_containerStyles[]
    | null;
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

export interface GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon {
  icon: GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles: GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_wrapperStyles[] | null;
  innerWrapperStyles:
    | GetSduiJourney_getSduiJourney_body_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles[]
    | null;
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
  id: string;
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
  /**
   * Supported RN version 3.70.0
   */
  backgroundColor: string | null;
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

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_modalCopy_error {
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaLabelSecondary: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_modalCopy_cancel {
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaLabelSecondary: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_modalCopy {
  error: GetSduiJourney_getSduiJourney_body_ContentItemMedia_modalCopy_error;
  cancel: GetSduiJourney_getSduiJourney_body_ContentItemMedia_modalCopy_cancel;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_source {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_mediaLogo {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_poster {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_videoLogo {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_thumbnail {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_lottie_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemMedia_lottie_styles[] | null;
  onAnimationEnd: GetSduiJourney_getSduiJourney_body_ContentItemMedia_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_onStart {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia_onEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemMedia {
  __typename: "ContentItemMedia";
  id: string;
  mediaTitle: string;
  mediaSubtitle: string;
  description: string;
  shortDescription: string;
  modalCopy: GetSduiJourney_getSduiJourney_body_ContentItemMedia_modalCopy;
  theme: string;
  orientation: ContentItemMediaOrientation;
  duration: number;
  yuCoin: number | null;
  stars: number | null;
  sourceType: string;
  eventType: string;
  startErrorMessage: string;
  startChallengeButtonLabel: string;
  showTimer: boolean;
  source: GetSduiJourney_getSduiJourney_body_ContentItemMedia_source;
  mediaLogo: GetSduiJourney_getSduiJourney_body_ContentItemMedia_mediaLogo;
  poster: GetSduiJourney_getSduiJourney_body_ContentItemMedia_poster;
  videoLogo: GetSduiJourney_getSduiJourney_body_ContentItemMedia_videoLogo | null;
  thumbnail: GetSduiJourney_getSduiJourney_body_ContentItemMedia_thumbnail;
  lottie: GetSduiJourney_getSduiJourney_body_ContentItemMedia_lottie | null;
  onLeftIconPress: GetSduiJourney_getSduiJourney_body_ContentItemMedia_onLeftIconPress | null;
  onRightIconPress: GetSduiJourney_getSduiJourney_body_ContentItemMedia_onRightIconPress | null;
  onStart: GetSduiJourney_getSduiJourney_body_ContentItemMedia_onStart | null;
  onEnd: GetSduiJourney_getSduiJourney_body_ContentItemMedia_onEnd | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemLinearGradient_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemLinearGradient_start {
  x: number;
  y: number;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemLinearGradient_end {
  x: number;
  y: number;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemLinearGradient {
  __typename: "ContentItemLinearGradient";
  id: string;
  colors: string[];
  styles: GetSduiJourney_getSduiJourney_body_ContentItemLinearGradient_styles[] | null;
  start: GetSduiJourney_getSduiJourney_body_ContentItemLinearGradient_start | null;
  end: GetSduiJourney_getSduiJourney_body_ContentItemLinearGradient_end | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemWrapper_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemWrapper_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemWrapper_localDispatchActions {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemWrapper_localDispatchActionsOnMount {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemWrapper {
  __typename: "ContentItemWrapper";
  id: string;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemWrapper_styles[] | null;
  children: string;
  pointerEvents: RNViewPointerEvents | null;
  /**
   * Supported RN version 3.85.0
   */
  absolute: string | null;
  /**
   * Supported RN version 3.87.0
   */
  onPress: GetSduiJourney_getSduiJourney_body_ContentItemWrapper_onPress | null;
  /**
   * Supported RN version 3.87.0
   */
  scrollViewProps: string | null;
  /**
   * Supported RN Version 3.101.0
   */
  dynamicStyleKey: string | null;
  /**
   * Supported RN Version 3.101.0
   */
  localDispatchActions: GetSduiJourney_getSduiJourney_body_ContentItemWrapper_localDispatchActions[] | null;
  /**
   * Supported RN Version 3.101.0
   */
  localDispatchActionsOnMount:
    | GetSduiJourney_getSduiJourney_body_ContentItemWrapper_localDispatchActionsOnMount[]
    | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemInfoCard_image {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemInfoCard_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemInfoCard_hyperlink {
  title: string;
  url: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemInfoCard {
  __typename: "ContentItemInfoCard";
  id: string;
  image: GetSduiJourney_getSduiJourney_body_ContentItemInfoCard_image | null;
  markdown: string;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemInfoCard_styles[] | null;
  hyperlink: GetSduiJourney_getSduiJourney_body_ContentItemInfoCard_hyperlink | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard_image {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard_titleWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard_subtitleWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard {
  __typename: "ContentItemBoxOptionCard";
  id: string;
  contentItemBoxOptionCardTitle: string | null;
  contentItemBoxOptionCardDescription: string | null;
  contentItemBoxOptionCardDescriptionTextType: string | null;
  image: GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard_image | null;
  onPress: GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard_onPress | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard_styles[] | null;
  /**
   * Supported RN version 3.96.0
   */
  innerHeight: number | null;
  /**
   * Supported RN version 3.96.0
   */
  subtitle: string | null;
  /**
   * Supported RN version 3.96.0
   */
  subtitleTextType: string | null;
  /**
   * Supported RN version 3.96.0
   */
  titleWrapperStyles: GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard_titleWrapperStyles[] | null;
  /**
   * Supported RN version 3.96.0
   */
  subtitleWrapperStyles: GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard_subtitleWrapperStyles[] | null;
  /**
   * Supported RN version 3.96.0
   */
  descriptionNumberOfLines: number | null;
  /**
   * Supported RN version 3.96.0
   */
  titleNumberOfLines: number | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemSwitch_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemSwitch_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemSwitch_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemSwitch {
  __typename: "ContentItemSwitch";
  id: string;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemSwitch_styles[] | null;
  wrapperStyles: GetSduiJourney_getSduiJourney_body_ContentItemSwitch_wrapperStyles[] | null;
  onPress: GetSduiJourney_getSduiJourney_body_ContentItemSwitch_onPress | null;
  defaultValue: boolean;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemShowHideBalance_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemShowHideBalance_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemShowHideBalance {
  __typename: "ContentItemShowHideBalance";
  id: string;
  balance: string;
  currency: string;
  balanceDescription: string | null;
  balanceDescriptionValue: string | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemShowHideBalance_styles[] | null;
  wrapperStyles: GetSduiJourney_getSduiJourney_body_ContentItemShowHideBalance_wrapperStyles[] | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_labelWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_pickerStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_buttonStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_buttonLeftIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_buttonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemDatePicker {
  __typename: "ContentItemDatePicker";
  id: string;
  initialDate: string | null;
  maxDate: string;
  minDate: string;
  dateFormat: string;
  label: string;
  labelWrapperStyles: GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_labelWrapperStyles[] | null;
  subLabel: string | null;
  pickerStyles: GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_pickerStyles[] | null;
  buttonStyles: GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_buttonStyles[] | null;
  buttonLeftIcon: GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_buttonLeftIcon | null;
  buttonRightIcon: GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_buttonRightIcon | null;
  size: ContentItemButtonSize;
  answerKey: string;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemDatePicker_styles[] | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemHint_hintImage {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemHint_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemHint_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_body_ContentItemHint {
  __typename: "ContentItemHint";
  id: string;
  hintTitle: string;
  contentItemHintDescription: string;
  hintImage: GetSduiJourney_getSduiJourney_body_ContentItemHint_hintImage;
  onPress: GetSduiJourney_getSduiJourney_body_ContentItemHint_onPress | null;
  styles: GetSduiJourney_getSduiJourney_body_ContentItemHint_styles[] | null;
}

export type GetSduiJourney_getSduiJourney_body =
  | GetSduiJourney_getSduiJourney_body_ContentItemProcessingTimer
  | GetSduiJourney_getSduiJourney_body_ContentItemMarkdown
  | GetSduiJourney_getSduiJourney_body_ContentItemBox
  | GetSduiJourney_getSduiJourney_body_ContentItemButton
  | GetSduiJourney_getSduiJourney_body_ContentItemImage
  | GetSduiJourney_getSduiJourney_body_ContentItemForm
  | GetSduiJourney_getSduiJourney_body_ContentItemText
  | GetSduiJourney_getSduiJourney_body_ContentItemTextInput
  | GetSduiJourney_getSduiJourney_body_ContentItemDropdownInput
  | GetSduiJourney_getSduiJourney_body_ContentItemRowIconTextBanner
  | GetSduiJourney_getSduiJourney_body_ContentItemLottie
  | GetSduiJourney_getSduiJourney_body_ContentItemPad
  | GetSduiJourney_getSduiJourney_body_ContentItemRadio
  | GetSduiJourney_getSduiJourney_body_ContentItemHeaderBar
  | GetSduiJourney_getSduiJourney_body_ContentItemProgressBar
  | GetSduiJourney_getSduiJourney_body_ContentItemTextGroup
  | GetSduiJourney_getSduiJourney_body_ContentItemAccordion
  | GetSduiJourney_getSduiJourney_body_ContentItemMedia
  | GetSduiJourney_getSduiJourney_body_ContentItemLinearGradient
  | GetSduiJourney_getSduiJourney_body_ContentItemWrapper
  | GetSduiJourney_getSduiJourney_body_ContentItemInfoCard
  | GetSduiJourney_getSduiJourney_body_ContentItemBoxOptionCard
  | GetSduiJourney_getSduiJourney_body_ContentItemSwitch
  | GetSduiJourney_getSduiJourney_body_ContentItemShowHideBalance
  | GetSduiJourney_getSduiJourney_body_ContentItemDatePicker
  | GetSduiJourney_getSduiJourney_body_ContentItemHint;

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemProcessingTimer {
  __typename:
    | "ContentItemProcessingTimer"
    | "ContentItemTable"
    | "ContentItemSelectedPackageCard"
    | "ContentItemSectionHeading"
    | "ContentItemYuCoinPower"
    | "ContentItemComparisonTableSelectPackage"
    | "ContentItemPerks"
    | "ContentItemPill"
    | "ContentItemSexPicker"
    | "ContentItemDependants"
    | "ContentItemSelectScheme"
    | "ContentItemKeyValueBox"
    | "ContentItemStages"
    | "ContentItemMarkdownBlock";
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

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_containerStyles {
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
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton_containerStyles[] | null;
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
  /**
   * Supported RN Version 3.101
   */
  dynamicStyleKey: string | null;
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

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDropdownInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDropdownInput_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDropdownInput_dropdownOptions {
  label: string | null;
  value: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDropdownInput {
  __typename: "ContentItemDropdownInput";
  id: string;
  heading: string | null;
  answerKey: string;
  validation: (GetSduiJourney_getSduiJourney_absolute_item_ContentItemDropdownInput_validation | null)[] | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemDropdownInput_styles[] | null;
  dropdownOptions: (GetSduiJourney_getSduiJourney_absolute_item_ContentItemDropdownInput_dropdownOptions | null)[];
  selectInstruction: string | null;
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

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_containerStyles {
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
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner_bannerButton_containerStyles[]
    | null;
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

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles {
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
  innerWrapperStyles:
    | GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles[]
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
  id: string;
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
  /**
   * Supported RN version 3.70.0
   */
  backgroundColor: string | null;
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

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_modalCopy_error {
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaLabelSecondary: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_modalCopy_cancel {
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaLabelSecondary: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_modalCopy {
  error: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_modalCopy_error;
  cancel: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_modalCopy_cancel;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_source {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_mediaLogo {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_poster {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_videoLogo {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_thumbnail {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_lottie_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_lottie_styles[] | null;
  onAnimationEnd: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_onStart {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_onEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia {
  __typename: "ContentItemMedia";
  id: string;
  mediaTitle: string;
  mediaSubtitle: string;
  description: string;
  shortDescription: string;
  modalCopy: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_modalCopy;
  theme: string;
  orientation: ContentItemMediaOrientation;
  duration: number;
  yuCoin: number | null;
  stars: number | null;
  sourceType: string;
  eventType: string;
  startErrorMessage: string;
  startChallengeButtonLabel: string;
  showTimer: boolean;
  source: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_source;
  mediaLogo: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_mediaLogo;
  poster: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_poster;
  videoLogo: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_videoLogo | null;
  thumbnail: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_thumbnail;
  lottie: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_lottie | null;
  onLeftIconPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_onLeftIconPress | null;
  onRightIconPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_onRightIconPress | null;
  onStart: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_onStart | null;
  onEnd: GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia_onEnd | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemLinearGradient_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemLinearGradient_start {
  x: number;
  y: number;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemLinearGradient_end {
  x: number;
  y: number;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemLinearGradient {
  __typename: "ContentItemLinearGradient";
  id: string;
  colors: string[];
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemLinearGradient_styles[] | null;
  start: GetSduiJourney_getSduiJourney_absolute_item_ContentItemLinearGradient_start | null;
  end: GetSduiJourney_getSduiJourney_absolute_item_ContentItemLinearGradient_end | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemWrapper_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemWrapper_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemWrapper_localDispatchActions {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemWrapper_localDispatchActionsOnMount {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemWrapper {
  __typename: "ContentItemWrapper";
  id: string;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemWrapper_styles[] | null;
  children: string;
  pointerEvents: RNViewPointerEvents | null;
  /**
   * Supported RN version 3.85.0
   */
  absolute: string | null;
  /**
   * Supported RN version 3.87.0
   */
  onPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemWrapper_onPress | null;
  /**
   * Supported RN version 3.87.0
   */
  scrollViewProps: string | null;
  /**
   * Supported RN Version 3.101.0
   */
  dynamicStyleKey: string | null;
  /**
   * Supported RN Version 3.101.0
   */
  localDispatchActions: GetSduiJourney_getSduiJourney_absolute_item_ContentItemWrapper_localDispatchActions[] | null;
  /**
   * Supported RN Version 3.101.0
   */
  localDispatchActionsOnMount:
    | GetSduiJourney_getSduiJourney_absolute_item_ContentItemWrapper_localDispatchActionsOnMount[]
    | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemInfoCard_image {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemInfoCard_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemInfoCard_hyperlink {
  title: string;
  url: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemInfoCard {
  __typename: "ContentItemInfoCard";
  id: string;
  image: GetSduiJourney_getSduiJourney_absolute_item_ContentItemInfoCard_image | null;
  markdown: string;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemInfoCard_styles[] | null;
  hyperlink: GetSduiJourney_getSduiJourney_absolute_item_ContentItemInfoCard_hyperlink | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard_image {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard_titleWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard_subtitleWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard {
  __typename: "ContentItemBoxOptionCard";
  id: string;
  contentItemBoxOptionCardTitle: string | null;
  contentItemBoxOptionCardDescription: string | null;
  contentItemBoxOptionCardDescriptionTextType: string | null;
  image: GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard_image | null;
  onPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard_onPress | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard_styles[] | null;
  /**
   * Supported RN version 3.96.0
   */
  innerHeight: number | null;
  /**
   * Supported RN version 3.96.0
   */
  subtitle: string | null;
  /**
   * Supported RN version 3.96.0
   */
  subtitleTextType: string | null;
  /**
   * Supported RN version 3.96.0
   */
  titleWrapperStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard_titleWrapperStyles[] | null;
  /**
   * Supported RN version 3.96.0
   */
  subtitleWrapperStyles:
    | GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard_subtitleWrapperStyles[]
    | null;
  /**
   * Supported RN version 3.96.0
   */
  descriptionNumberOfLines: number | null;
  /**
   * Supported RN version 3.96.0
   */
  titleNumberOfLines: number | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemSwitch_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemSwitch_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemSwitch_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemSwitch {
  __typename: "ContentItemSwitch";
  id: string;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemSwitch_styles[] | null;
  wrapperStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemSwitch_wrapperStyles[] | null;
  onPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemSwitch_onPress | null;
  defaultValue: boolean;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemShowHideBalance_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemShowHideBalance_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemShowHideBalance {
  __typename: "ContentItemShowHideBalance";
  id: string;
  balance: string;
  currency: string;
  balanceDescription: string | null;
  balanceDescriptionValue: string | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemShowHideBalance_styles[] | null;
  wrapperStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemShowHideBalance_wrapperStyles[] | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_labelWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_pickerStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_buttonStyles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_buttonLeftIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_buttonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker {
  __typename: "ContentItemDatePicker";
  id: string;
  initialDate: string | null;
  maxDate: string;
  minDate: string;
  dateFormat: string;
  label: string;
  labelWrapperStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_labelWrapperStyles[] | null;
  subLabel: string | null;
  pickerStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_pickerStyles[] | null;
  buttonStyles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_buttonStyles[] | null;
  buttonLeftIcon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_buttonLeftIcon | null;
  buttonRightIcon: GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_buttonRightIcon | null;
  size: ContentItemButtonSize;
  answerKey: string;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker_styles[] | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemHint_hintImage {
  id: string;
  uri: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemHint_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemHint_styles {
  property: string;
  value: string;
}

export interface GetSduiJourney_getSduiJourney_absolute_item_ContentItemHint {
  __typename: "ContentItemHint";
  id: string;
  hintTitle: string;
  contentItemHintDescription: string;
  hintImage: GetSduiJourney_getSduiJourney_absolute_item_ContentItemHint_hintImage;
  onPress: GetSduiJourney_getSduiJourney_absolute_item_ContentItemHint_onPress | null;
  styles: GetSduiJourney_getSduiJourney_absolute_item_ContentItemHint_styles[] | null;
}

export type GetSduiJourney_getSduiJourney_absolute_item =
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemProcessingTimer
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemMarkdown
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemBox
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemButton
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemImage
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemForm
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemText
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextInput
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemDropdownInput
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemRowIconTextBanner
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemLottie
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemPad
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemRadio
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemHeaderBar
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemProgressBar
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemTextGroup
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemAccordion
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemMedia
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemLinearGradient
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemWrapper
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemInfoCard
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemBoxOptionCard
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemSwitch
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemShowHideBalance
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemDatePicker
  | GetSduiJourney_getSduiJourney_absolute_item_ContentItemHint;

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
  isSafeAreaView: boolean | null;
  body: GetSduiJourney_getSduiJourney_body[] | null;
  absolute: GetSduiJourney_getSduiJourney_absolute[] | null;
  containerStyles: GetSduiJourney_getSduiJourney_containerStyles[] | null;
}

export interface GetSduiJourney {
  getSduiJourney: GetSduiJourney_getSduiJourney | null;
}

export interface GetSduiJourneyVariables {
  journeyId: string;
  dynamicId?: string | null;
}
