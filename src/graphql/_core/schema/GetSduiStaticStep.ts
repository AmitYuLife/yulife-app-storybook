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
// GraphQL query operation: GetSduiStaticStep
// ====================================================

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemProcessingTimer {
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

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMarkdown_markdownContainerStyle[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton {
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
  onPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_onPress | null;
  event: GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_event | null;
  icon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage_image | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage_styles[] | null;
  wrapperStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation:
    | (GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormTextInput_validation | null)[]
    | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption | null;
  icon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  options: (GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  validation:
    | (GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[]
    | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements =
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormTextInput
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSelectInput
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements_ContentItemFormSubmitButton;

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm {
  __typename: "ContentItemForm";
  elements: (GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm_elements | null)[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemText_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemText_styles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextInput_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextInput {
  __typename: "ContentItemTextInput";
  id: string;
  heading: string | null;
  answerKey: string;
  type: ContentItemFormTextInputType | null;
  prefixValue: string | null;
  validation: (GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextInput_validation | null)[] | null;
  /**
   * Supported RN version 3.58.0
   */
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextInput_styles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDropdownInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDropdownInput_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDropdownInput_dropdownOptions {
  label: string | null;
  value: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDropdownInput {
  __typename: "ContentItemDropdownInput";
  id: string;
  heading: string | null;
  answerKey: string;
  validation: (GetSduiStaticStep_getSduiStaticStep_body_ContentItemDropdownInput_validation | null)[] | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemDropdownInput_styles[] | null;
  dropdownOptions: (GetSduiStaticStep_getSduiStaticStep_body_ContentItemDropdownInput_dropdownOptions | null)[];
  selectInstruction: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_containerStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_onPress | null;
  event: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_event | null;
  icon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_icon | null;
  contentItemButtonRightIcon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton_containerStyles[]
    | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_containerActions {
  id: string;
  event: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_containerActions_event | null;
  onPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_containerActions_onPress;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner {
  __typename: "ContentItemRowIconTextBanner";
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerIcon;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_styles[] | null;
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
  bannerButton: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_bannerButton | null;
  /**
   * RN client version >= 3.45.0: icon field is required, so showIcon is used
   * here for backward compatibility to conditionally hide the icon
   */
  showIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner_containerActions | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemLottie_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemLottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemLottie {
  __typename: "ContentItemLottie";
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemLottie_styles[] | null;
  onAnimationEnd: GetSduiStaticStep_getSduiStaticStep_body_ContentItemLottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemPad_styles[] | null;
  dynamicStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemPad_dynamicStyles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_selectedStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon {
  icon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_wrapperStyles[] | null;
  innerWrapperStyles:
    | GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles[]
    | null;
  boxOptionHeight: number | null;
  imageWidth: number | null;
  imageHeight: number | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices {
  label: string;
  value: string;
  renderAsIcon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio {
  __typename: "ContentItemRadio";
  id: string;
  iconOptions: boolean;
  answerKey: string;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_styles[] | null;
  choices: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices[];
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemHeaderBar_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemHeaderBar_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemHeaderBar {
  __typename: "ContentItemHeaderBar";
  id: string;
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemHeaderBar_onRightIconPress | null;
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

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
  publishKeyHeight: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_items_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_items_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_items_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_items_labelStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_items {
  label: string;
  onPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_items_onPress | null;
  rightIcon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_items_rightIcon | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_items_styles[] | null;
  labelStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_items_labelStyles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup {
  __typename: "ContentItemTextGroup";
  id: string;
  items: GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_items[];
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup_styles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_headerIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_infoIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_items_info_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_items_info {
  onPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_items_info_onPress | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_items {
  leftText: string;
  rightTextBody: string | null;
  rightTextLabel: string | null;
  info: GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_items_info | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion {
  __typename: "ContentItemAccordion";
  id: string;
  heading: string | null;
  headerIcon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_headerIcon | null;
  infoIcon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_infoIcon | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_styles[] | null;
  items: GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion_items[];
  subheading: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_source {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_mediaLogo {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_poster {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_videoLogo {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_thumbnail {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_lottie_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_lottie_styles[] | null;
  onAnimationEnd: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_onStart {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_onEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia {
  __typename: "ContentItemMedia";
  id: string;
  mediaTitle: string;
  description: string;
  shortDescription: string;
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
  source: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_source;
  mediaLogo: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_mediaLogo;
  poster: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_poster;
  videoLogo: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_videoLogo | null;
  thumbnail: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_thumbnail;
  lottie: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_lottie | null;
  onLeftIconPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_onLeftIconPress | null;
  onRightIconPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_onRightIconPress | null;
  onStart: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_onStart | null;
  onEnd: GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia_onEnd | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemLinearGradient_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemLinearGradient_start {
  x: number;
  y: number;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemLinearGradient_end {
  x: number;
  y: number;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemLinearGradient {
  __typename: "ContentItemLinearGradient";
  id: string;
  colors: string[];
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemLinearGradient_styles[] | null;
  start: GetSduiStaticStep_getSduiStaticStep_body_ContentItemLinearGradient_start | null;
  end: GetSduiStaticStep_getSduiStaticStep_body_ContentItemLinearGradient_end | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemWrapper_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemWrapper_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemWrapper {
  __typename: "ContentItemWrapper";
  id: string;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemWrapper_styles[] | null;
  children: string;
  pointerEvents: RNViewPointerEvents | null;
  /**
   * Supported RN version 3.85.0
   */
  absolute: string | null;
  /**
   * Supported RN version 3.87.0
   */
  onPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemWrapper_onPress | null;
  /**
   * Supported RN version 3.87.0
   */
  scrollViewProps: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemInfoCard_image {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemInfoCard_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemInfoCard_hyperlink {
  title: string;
  url: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemInfoCard {
  __typename: "ContentItemInfoCard";
  id: string;
  image: GetSduiStaticStep_getSduiStaticStep_body_ContentItemInfoCard_image | null;
  markdown: string;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemInfoCard_styles[] | null;
  hyperlink: GetSduiStaticStep_getSduiStaticStep_body_ContentItemInfoCard_hyperlink | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemBoxOptionCard_image {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemBoxOptionCard_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemBoxOptionCard_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemBoxOptionCard {
  __typename: "ContentItemBoxOptionCard";
  id: string;
  contentItemBoxOptionCardTitle: string | null;
  contentItemBoxOptionCardDescription: string | null;
  contentItemBoxOptionCardDescriptionTextType: string | null;
  image: GetSduiStaticStep_getSduiStaticStep_body_ContentItemBoxOptionCard_image | null;
  onPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemBoxOptionCard_onPress | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemBoxOptionCard_styles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemSwitch_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemSwitch_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemSwitch_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemSwitch {
  __typename: "ContentItemSwitch";
  id: string;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemSwitch_styles[] | null;
  wrapperStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemSwitch_wrapperStyles[] | null;
  onPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemSwitch_onPress | null;
  defaultValue: boolean;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemShowHideBalance_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemShowHideBalance_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemShowHideBalance {
  __typename: "ContentItemShowHideBalance";
  id: string;
  balance: string;
  currency: string;
  balanceDescription: string | null;
  balanceDescriptionValue: string | null;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemShowHideBalance_styles[] | null;
  wrapperStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemShowHideBalance_wrapperStyles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_labelWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_pickerStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_buttonStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_buttonLeftIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_buttonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker {
  __typename: "ContentItemDatePicker";
  id: string;
  initialDate: string | null;
  maxDate: string;
  minDate: string;
  dateFormat: string;
  label: string;
  labelWrapperStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_labelWrapperStyles[] | null;
  subLabel: string | null;
  pickerStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_pickerStyles[] | null;
  buttonStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_buttonStyles[] | null;
  buttonLeftIcon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_buttonLeftIcon | null;
  buttonRightIcon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_buttonRightIcon | null;
  size: ContentItemButtonSize;
  answerKey: string;
  styles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker_styles[] | null;
}

export type GetSduiStaticStep_getSduiStaticStep_body =
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemProcessingTimer
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemMarkdown
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemBox
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemText
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextInput
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemDropdownInput
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemRowIconTextBanner
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemLottie
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemPad
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemHeaderBar
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemProgressBar
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemTextGroup
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemAccordion
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemMedia
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemLinearGradient
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemWrapper
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemInfoCard
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemBoxOptionCard
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemSwitch
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemShowHideBalance
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemDatePicker;

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemProcessingTimer {
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

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle:
    | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMarkdown_markdownContainerStyle[]
    | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton {
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
  onPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_onPress | null;
  event: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_event | null;
  icon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage_image | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage_styles[] | null;
  wrapperStyles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation:
    | (GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormTextInput_validation | null)[]
    | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption | null;
  icon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  options: (GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  validation:
    | (GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[]
    | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements =
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormTextInput
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSelectInput
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements_ContentItemFormSubmitButton;

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm {
  __typename: "ContentItemForm";
  elements: (GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm_elements | null)[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemText_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemText_styles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextInput_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextInput {
  __typename: "ContentItemTextInput";
  id: string;
  heading: string | null;
  answerKey: string;
  type: ContentItemFormTextInputType | null;
  prefixValue: string | null;
  validation: (GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextInput_validation | null)[] | null;
  /**
   * Supported RN version 3.58.0
   */
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextInput_styles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDropdownInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDropdownInput_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDropdownInput_dropdownOptions {
  label: string | null;
  value: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDropdownInput {
  __typename: "ContentItemDropdownInput";
  id: string;
  heading: string | null;
  answerKey: string;
  validation: (GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDropdownInput_validation | null)[] | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDropdownInput_styles[] | null;
  dropdownOptions: (GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDropdownInput_dropdownOptions | null)[];
  selectInstruction: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_containerStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_onPress | null;
  event: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_event | null;
  icon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_icon | null;
  contentItemButtonRightIcon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton_containerStyles[]
    | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_containerActions {
  id: string;
  event: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_containerActions_event | null;
  onPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_containerActions_onPress;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner {
  __typename: "ContentItemRowIconTextBanner";
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerIcon;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_styles[] | null;
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
  bannerButton: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_bannerButton | null;
  /**
   * RN client version >= 3.45.0: icon field is required, so showIcon is used
   * here for backward compatibility to conditionally hide the icon
   */
  showIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner_containerActions | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLottie_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLottie {
  __typename: "ContentItemLottie";
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLottie_styles[] | null;
  onAnimationEnd: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemPad_styles[] | null;
  dynamicStyles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemPad_dynamicStyles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_icon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_selectedStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon {
  icon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles:
    | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_wrapperStyles[]
    | null;
  innerWrapperStyles:
    | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles[]
    | null;
  boxOptionHeight: number | null;
  imageWidth: number | null;
  imageHeight: number | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices {
  label: string;
  value: string;
  renderAsIcon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio {
  __typename: "ContentItemRadio";
  id: string;
  iconOptions: boolean;
  answerKey: string;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_styles[] | null;
  choices: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices[];
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemHeaderBar_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemHeaderBar_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemHeaderBar {
  __typename: "ContentItemHeaderBar";
  id: string;
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemHeaderBar_onRightIconPress | null;
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

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
  publishKeyHeight: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_items_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_items_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_items_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_items_labelStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_items {
  label: string;
  onPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_items_onPress | null;
  rightIcon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_items_rightIcon | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_items_styles[] | null;
  labelStyles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_items_labelStyles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup {
  __typename: "ContentItemTextGroup";
  id: string;
  items: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_items[];
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup_styles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_headerIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_infoIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_items_info_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_items_info {
  onPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_items_info_onPress | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_items {
  leftText: string;
  rightTextBody: string | null;
  rightTextLabel: string | null;
  info: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_items_info | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion {
  __typename: "ContentItemAccordion";
  id: string;
  heading: string | null;
  headerIcon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_headerIcon | null;
  infoIcon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_infoIcon | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_styles[] | null;
  items: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion_items[];
  subheading: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_source {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_mediaLogo {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_poster {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_videoLogo {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_thumbnail {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_lottie_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_lottie_styles[] | null;
  onAnimationEnd: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_onStart {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_onEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia {
  __typename: "ContentItemMedia";
  id: string;
  mediaTitle: string;
  description: string;
  shortDescription: string;
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
  source: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_source;
  mediaLogo: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_mediaLogo;
  poster: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_poster;
  videoLogo: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_videoLogo | null;
  thumbnail: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_thumbnail;
  lottie: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_lottie | null;
  onLeftIconPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_onLeftIconPress | null;
  onRightIconPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_onRightIconPress | null;
  onStart: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_onStart | null;
  onEnd: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia_onEnd | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLinearGradient_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLinearGradient_start {
  x: number;
  y: number;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLinearGradient_end {
  x: number;
  y: number;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLinearGradient {
  __typename: "ContentItemLinearGradient";
  id: string;
  colors: string[];
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLinearGradient_styles[] | null;
  start: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLinearGradient_start | null;
  end: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLinearGradient_end | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemWrapper_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemWrapper_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemWrapper {
  __typename: "ContentItemWrapper";
  id: string;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemWrapper_styles[] | null;
  children: string;
  pointerEvents: RNViewPointerEvents | null;
  /**
   * Supported RN version 3.85.0
   */
  absolute: string | null;
  /**
   * Supported RN version 3.87.0
   */
  onPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemWrapper_onPress | null;
  /**
   * Supported RN version 3.87.0
   */
  scrollViewProps: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemInfoCard_image {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemInfoCard_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemInfoCard_hyperlink {
  title: string;
  url: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemInfoCard {
  __typename: "ContentItemInfoCard";
  id: string;
  image: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemInfoCard_image | null;
  markdown: string;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemInfoCard_styles[] | null;
  hyperlink: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemInfoCard_hyperlink | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBoxOptionCard_image {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBoxOptionCard_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBoxOptionCard_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBoxOptionCard {
  __typename: "ContentItemBoxOptionCard";
  id: string;
  contentItemBoxOptionCardTitle: string | null;
  contentItemBoxOptionCardDescription: string | null;
  contentItemBoxOptionCardDescriptionTextType: string | null;
  image: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBoxOptionCard_image | null;
  onPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBoxOptionCard_onPress | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBoxOptionCard_styles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemSwitch_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemSwitch_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemSwitch_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemSwitch {
  __typename: "ContentItemSwitch";
  id: string;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemSwitch_styles[] | null;
  wrapperStyles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemSwitch_wrapperStyles[] | null;
  onPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemSwitch_onPress | null;
  defaultValue: boolean;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemShowHideBalance_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemShowHideBalance_wrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemShowHideBalance {
  __typename: "ContentItemShowHideBalance";
  id: string;
  balance: string;
  currency: string;
  balanceDescription: string | null;
  balanceDescriptionValue: string | null;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemShowHideBalance_styles[] | null;
  wrapperStyles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemShowHideBalance_wrapperStyles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_labelWrapperStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_pickerStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_buttonStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_buttonLeftIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_buttonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker {
  __typename: "ContentItemDatePicker";
  id: string;
  initialDate: string | null;
  maxDate: string;
  minDate: string;
  dateFormat: string;
  label: string;
  labelWrapperStyles:
    | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_labelWrapperStyles[]
    | null;
  subLabel: string | null;
  pickerStyles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_pickerStyles[] | null;
  buttonStyles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_buttonStyles[] | null;
  buttonLeftIcon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_buttonLeftIcon | null;
  buttonRightIcon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_buttonRightIcon | null;
  size: ContentItemButtonSize;
  answerKey: string;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker_styles[] | null;
}

export type GetSduiStaticStep_getSduiStaticStep_absolute_item =
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemProcessingTimer
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMarkdown
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBox
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemText
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextInput
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDropdownInput
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRowIconTextBanner
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLottie
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemPad
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemHeaderBar
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemProgressBar
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemTextGroup
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemAccordion
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMedia
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemLinearGradient
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemWrapper
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemInfoCard
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBoxOptionCard
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemSwitch
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemShowHideBalance
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemDatePicker;

export interface GetSduiStaticStep_getSduiStaticStep_absolute_styles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute {
  isBackground: boolean | null;
  item: GetSduiStaticStep_getSduiStaticStep_absolute_item;
  styles: GetSduiStaticStep_getSduiStaticStep_absolute_styles[] | null;
  dynamicStyles: GetSduiStaticStep_getSduiStaticStep_absolute_dynamicStyles[] | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_containerStyles {
  property: string;
  value: string;
}

export interface GetSduiStaticStep_getSduiStaticStep {
  stepId: string;
  stepData: string | null;
  body: GetSduiStaticStep_getSduiStaticStep_body[] | null;
  absolute: GetSduiStaticStep_getSduiStaticStep_absolute[] | null;
  containerStyles: GetSduiStaticStep_getSduiStaticStep_containerStyles[] | null;
}

export interface GetSduiStaticStep {
  /**
   * Request a static step, or a static step from a journey
   */
  getSduiStaticStep: GetSduiStaticStep_getSduiStaticStep | null;
}

export interface GetSduiStaticStepVariables {
  stepId: string;
  journeyId?: string | null;
  dynamicId?: string | null;
}
