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
// GraphQL fragment: AbsoluteContentItem
// ====================================================

export interface AbsoluteContentItem_item_ContentItemProcessingTimer {
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

export interface AbsoluteContentItem_item_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: AbsoluteContentItem_item_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle: AbsoluteContentItem_item_ContentItemMarkdown_markdownContainerStyle[] | null;
}

export interface AbsoluteContentItem_item_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface AbsoluteContentItem_item_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemButton {
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
  onPress: AbsoluteContentItem_item_ContentItemButton_onPress | null;
  event: AbsoluteContentItem_item_ContentItemButton_event | null;
  icon: AbsoluteContentItem_item_ContentItemButton_icon | null;
  contentItemButtonRightIcon: AbsoluteContentItem_item_ContentItemButton_contentItemButtonRightIcon | null;
  styles: AbsoluteContentItem_item_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: AbsoluteContentItem_item_ContentItemButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface AbsoluteContentItem_item_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: AbsoluteContentItem_item_ContentItemImage_image | null;
  styles: AbsoluteContentItem_item_ContentItemImage_styles[] | null;
  wrapperStyles: AbsoluteContentItem_item_ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: AbsoluteContentItem_item_ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}

export interface AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation: (AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormTextInput_validation | null)[] | null;
}

export interface AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption | null;
  icon: AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  options: (AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  validation: (AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[] | null;
}

export interface AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type AbsoluteContentItem_item_ContentItemForm_elements =
  | AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormTextInput
  | AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSelectInput
  | AbsoluteContentItem_item_ContentItemForm_elements_ContentItemFormSubmitButton;

export interface AbsoluteContentItem_item_ContentItemForm {
  __typename: "ContentItemForm";
  elements: (AbsoluteContentItem_item_ContentItemForm_elements | null)[] | null;
}

export interface AbsoluteContentItem_item_ContentItemText_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: AbsoluteContentItem_item_ContentItemText_styles[] | null;
}

export interface AbsoluteContentItem_item_ContentItemTextInput_validation {
  validationName: string;
  validationValue: string;
}

export interface AbsoluteContentItem_item_ContentItemTextInput_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemTextInput {
  __typename: "ContentItemTextInput";
  id: string;
  heading: string | null;
  answerKey: string;
  type: ContentItemFormTextInputType | null;
  prefixValue: string | null;
  validation: (AbsoluteContentItem_item_ContentItemTextInput_validation | null)[] | null;
  /**
   * Supported RN version 3.58.0
   */
  styles: AbsoluteContentItem_item_ContentItemTextInput_styles[] | null;
}

export interface AbsoluteContentItem_item_ContentItemDropdownInput_validation {
  validationName: string;
  validationValue: string;
}

export interface AbsoluteContentItem_item_ContentItemDropdownInput_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemDropdownInput_dropdownOptions {
  label: string | null;
  value: string | null;
}

export interface AbsoluteContentItem_item_ContentItemDropdownInput {
  __typename: "ContentItemDropdownInput";
  id: string;
  heading: string | null;
  answerKey: string;
  validation: (AbsoluteContentItem_item_ContentItemDropdownInput_validation | null)[] | null;
  styles: AbsoluteContentItem_item_ContentItemDropdownInput_styles[] | null;
  dropdownOptions: (AbsoluteContentItem_item_ContentItemDropdownInput_dropdownOptions | null)[];
  selectInstruction: string | null;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_icon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_containerStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_onPress | null;
  event: AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_event | null;
  icon: AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_icon | null;
  contentItemButtonRightIcon: AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon | null;
  styles: AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner_containerActions {
  id: string;
  event: AbsoluteContentItem_item_ContentItemRowIconTextBanner_containerActions_event | null;
  onPress: AbsoluteContentItem_item_ContentItemRowIconTextBanner_containerActions_onPress;
}

export interface AbsoluteContentItem_item_ContentItemRowIconTextBanner {
  __typename: "ContentItemRowIconTextBanner";
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerIcon;
  styles: AbsoluteContentItem_item_ContentItemRowIconTextBanner_styles[] | null;
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
  bannerButton: AbsoluteContentItem_item_ContentItemRowIconTextBanner_bannerButton | null;
  /**
   * RN client version >= 3.45.0: icon field is required, so showIcon is used
   * here for backward compatibility to conditionally hide the icon
   */
  showIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: AbsoluteContentItem_item_ContentItemRowIconTextBanner_containerActions | null;
}

export interface AbsoluteContentItem_item_ContentItemLottie_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemLottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemLottie {
  __typename: "ContentItemLottie";
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: AbsoluteContentItem_item_ContentItemLottie_styles[] | null;
  onAnimationEnd: AbsoluteContentItem_item_ContentItemLottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface AbsoluteContentItem_item_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface AbsoluteContentItem_item_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: AbsoluteContentItem_item_ContentItemPad_styles[] | null;
  dynamicStyles: AbsoluteContentItem_item_ContentItemPad_dynamicStyles[] | null;
}

export interface AbsoluteContentItem_item_ContentItemRadio_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_icon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_selectedStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_wrapperStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon {
  icon: AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles: AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_wrapperStyles[] | null;
  innerWrapperStyles: AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles[] | null;
  boxOptionHeight: number | null;
  imageWidth: number | null;
  imageHeight: number | null;
}

export interface AbsoluteContentItem_item_ContentItemRadio_choices {
  label: string;
  value: string;
  renderAsIcon: AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon | null;
}

export interface AbsoluteContentItem_item_ContentItemRadio {
  __typename: "ContentItemRadio";
  id: string;
  iconOptions: boolean;
  answerKey: string;
  styles: AbsoluteContentItem_item_ContentItemRadio_styles[] | null;
  choices: AbsoluteContentItem_item_ContentItemRadio_choices[];
}

export interface AbsoluteContentItem_item_ContentItemHeaderBar_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemHeaderBar_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemHeaderBar {
  __typename: "ContentItemHeaderBar";
  id: string;
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: AbsoluteContentItem_item_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: AbsoluteContentItem_item_ContentItemHeaderBar_onRightIconPress | null;
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

export interface AbsoluteContentItem_item_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
  publishKeyHeight: string | null;
}

export interface AbsoluteContentItem_item_ContentItemTextGroup_items_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemTextGroup_items_rightIcon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemTextGroup_items_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemTextGroup_items_labelStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemTextGroup_items {
  label: string;
  onPress: AbsoluteContentItem_item_ContentItemTextGroup_items_onPress | null;
  rightIcon: AbsoluteContentItem_item_ContentItemTextGroup_items_rightIcon | null;
  styles: AbsoluteContentItem_item_ContentItemTextGroup_items_styles[] | null;
  labelStyles: AbsoluteContentItem_item_ContentItemTextGroup_items_labelStyles[] | null;
}

export interface AbsoluteContentItem_item_ContentItemTextGroup_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemTextGroup {
  __typename: "ContentItemTextGroup";
  id: string;
  items: AbsoluteContentItem_item_ContentItemTextGroup_items[];
  styles: AbsoluteContentItem_item_ContentItemTextGroup_styles[] | null;
}

export interface AbsoluteContentItem_item_ContentItemAccordion_headerIcon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemAccordion_infoIcon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemAccordion_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemAccordion_items_info_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemAccordion_items_info {
  onPress: AbsoluteContentItem_item_ContentItemAccordion_items_info_onPress | null;
}

export interface AbsoluteContentItem_item_ContentItemAccordion_items {
  leftText: string;
  rightTextBody: string | null;
  rightTextLabel: string | null;
  info: AbsoluteContentItem_item_ContentItemAccordion_items_info | null;
}

export interface AbsoluteContentItem_item_ContentItemAccordion {
  __typename: "ContentItemAccordion";
  id: string;
  heading: string | null;
  headerIcon: AbsoluteContentItem_item_ContentItemAccordion_headerIcon | null;
  infoIcon: AbsoluteContentItem_item_ContentItemAccordion_infoIcon | null;
  styles: AbsoluteContentItem_item_ContentItemAccordion_styles[] | null;
  items: AbsoluteContentItem_item_ContentItemAccordion_items[];
  subheading: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_source {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_mediaLogo {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_poster {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_videoLogo {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_thumbnail {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_lottie_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemMedia_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: AbsoluteContentItem_item_ContentItemMedia_lottie_styles[] | null;
  onAnimationEnd: AbsoluteContentItem_item_ContentItemMedia_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_onStart {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia_onEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemMedia {
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
  source: AbsoluteContentItem_item_ContentItemMedia_source;
  mediaLogo: AbsoluteContentItem_item_ContentItemMedia_mediaLogo;
  poster: AbsoluteContentItem_item_ContentItemMedia_poster;
  videoLogo: AbsoluteContentItem_item_ContentItemMedia_videoLogo | null;
  thumbnail: AbsoluteContentItem_item_ContentItemMedia_thumbnail;
  lottie: AbsoluteContentItem_item_ContentItemMedia_lottie | null;
  onLeftIconPress: AbsoluteContentItem_item_ContentItemMedia_onLeftIconPress | null;
  onRightIconPress: AbsoluteContentItem_item_ContentItemMedia_onRightIconPress | null;
  onStart: AbsoluteContentItem_item_ContentItemMedia_onStart | null;
  onEnd: AbsoluteContentItem_item_ContentItemMedia_onEnd | null;
}

export interface AbsoluteContentItem_item_ContentItemLinearGradient_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemLinearGradient_start {
  x: number;
  y: number;
}

export interface AbsoluteContentItem_item_ContentItemLinearGradient_end {
  x: number;
  y: number;
}

export interface AbsoluteContentItem_item_ContentItemLinearGradient {
  __typename: "ContentItemLinearGradient";
  id: string;
  colors: string[];
  styles: AbsoluteContentItem_item_ContentItemLinearGradient_styles[] | null;
  start: AbsoluteContentItem_item_ContentItemLinearGradient_start | null;
  end: AbsoluteContentItem_item_ContentItemLinearGradient_end | null;
}

export interface AbsoluteContentItem_item_ContentItemWrapper_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemWrapper_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemWrapper {
  __typename: "ContentItemWrapper";
  id: string;
  styles: AbsoluteContentItem_item_ContentItemWrapper_styles[] | null;
  children: string;
  pointerEvents: RNViewPointerEvents | null;
  /**
   * Supported RN version 3.85.0
   */
  absolute: string | null;
  /**
   * Supported RN version 3.87.0
   */
  onPress: AbsoluteContentItem_item_ContentItemWrapper_onPress | null;
  /**
   * Supported RN version 3.87.0
   */
  scrollViewProps: string | null;
}

export interface AbsoluteContentItem_item_ContentItemInfoCard_image {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemInfoCard_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemInfoCard_hyperlink {
  title: string;
  url: string;
}

export interface AbsoluteContentItem_item_ContentItemInfoCard {
  __typename: "ContentItemInfoCard";
  id: string;
  image: AbsoluteContentItem_item_ContentItemInfoCard_image | null;
  markdown: string;
  styles: AbsoluteContentItem_item_ContentItemInfoCard_styles[] | null;
  hyperlink: AbsoluteContentItem_item_ContentItemInfoCard_hyperlink | null;
}

export interface AbsoluteContentItem_item_ContentItemBoxOptionCard_image {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemBoxOptionCard_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemBoxOptionCard_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemBoxOptionCard_titleWrapperStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemBoxOptionCard_subtitleWrapperStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemBoxOptionCard {
  __typename: "ContentItemBoxOptionCard";
  id: string;
  contentItemBoxOptionCardTitle: string | null;
  contentItemBoxOptionCardDescription: string | null;
  contentItemBoxOptionCardDescriptionTextType: string | null;
  image: AbsoluteContentItem_item_ContentItemBoxOptionCard_image | null;
  onPress: AbsoluteContentItem_item_ContentItemBoxOptionCard_onPress | null;
  styles: AbsoluteContentItem_item_ContentItemBoxOptionCard_styles[] | null;
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
  titleWrapperStyles: AbsoluteContentItem_item_ContentItemBoxOptionCard_titleWrapperStyles[] | null;
  /**
   * Supported RN version 3.96.0
   */
  subtitleWrapperStyles: AbsoluteContentItem_item_ContentItemBoxOptionCard_subtitleWrapperStyles[] | null;
  /**
   * Supported RN version 3.96.0
   */
  descriptionNumberOfLines: number | null;
  /**
   * Supported RN version 3.96.0
   */
  titleNumberOfLines: number | null;
}

export interface AbsoluteContentItem_item_ContentItemSwitch_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemSwitch_wrapperStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemSwitch_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface AbsoluteContentItem_item_ContentItemSwitch {
  __typename: "ContentItemSwitch";
  id: string;
  styles: AbsoluteContentItem_item_ContentItemSwitch_styles[] | null;
  wrapperStyles: AbsoluteContentItem_item_ContentItemSwitch_wrapperStyles[] | null;
  onPress: AbsoluteContentItem_item_ContentItemSwitch_onPress | null;
  defaultValue: boolean;
}

export interface AbsoluteContentItem_item_ContentItemShowHideBalance_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemShowHideBalance_wrapperStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemShowHideBalance {
  __typename: "ContentItemShowHideBalance";
  id: string;
  balance: string;
  currency: string;
  balanceDescription: string | null;
  balanceDescriptionValue: string | null;
  styles: AbsoluteContentItem_item_ContentItemShowHideBalance_styles[] | null;
  wrapperStyles: AbsoluteContentItem_item_ContentItemShowHideBalance_wrapperStyles[] | null;
}

export interface AbsoluteContentItem_item_ContentItemDatePicker_labelWrapperStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemDatePicker_pickerStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemDatePicker_buttonStyles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemDatePicker_buttonLeftIcon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemDatePicker_buttonRightIcon {
  id: string;
  uri: string | null;
}

export interface AbsoluteContentItem_item_ContentItemDatePicker_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_item_ContentItemDatePicker {
  __typename: "ContentItemDatePicker";
  id: string;
  initialDate: string | null;
  maxDate: string;
  minDate: string;
  dateFormat: string;
  label: string;
  labelWrapperStyles: AbsoluteContentItem_item_ContentItemDatePicker_labelWrapperStyles[] | null;
  subLabel: string | null;
  pickerStyles: AbsoluteContentItem_item_ContentItemDatePicker_pickerStyles[] | null;
  buttonStyles: AbsoluteContentItem_item_ContentItemDatePicker_buttonStyles[] | null;
  buttonLeftIcon: AbsoluteContentItem_item_ContentItemDatePicker_buttonLeftIcon | null;
  buttonRightIcon: AbsoluteContentItem_item_ContentItemDatePicker_buttonRightIcon | null;
  size: ContentItemButtonSize;
  answerKey: string;
  styles: AbsoluteContentItem_item_ContentItemDatePicker_styles[] | null;
}

export type AbsoluteContentItem_item =
  | AbsoluteContentItem_item_ContentItemProcessingTimer
  | AbsoluteContentItem_item_ContentItemMarkdown
  | AbsoluteContentItem_item_ContentItemBox
  | AbsoluteContentItem_item_ContentItemButton
  | AbsoluteContentItem_item_ContentItemImage
  | AbsoluteContentItem_item_ContentItemForm
  | AbsoluteContentItem_item_ContentItemText
  | AbsoluteContentItem_item_ContentItemTextInput
  | AbsoluteContentItem_item_ContentItemDropdownInput
  | AbsoluteContentItem_item_ContentItemRowIconTextBanner
  | AbsoluteContentItem_item_ContentItemLottie
  | AbsoluteContentItem_item_ContentItemPad
  | AbsoluteContentItem_item_ContentItemRadio
  | AbsoluteContentItem_item_ContentItemHeaderBar
  | AbsoluteContentItem_item_ContentItemProgressBar
  | AbsoluteContentItem_item_ContentItemTextGroup
  | AbsoluteContentItem_item_ContentItemAccordion
  | AbsoluteContentItem_item_ContentItemMedia
  | AbsoluteContentItem_item_ContentItemLinearGradient
  | AbsoluteContentItem_item_ContentItemWrapper
  | AbsoluteContentItem_item_ContentItemInfoCard
  | AbsoluteContentItem_item_ContentItemBoxOptionCard
  | AbsoluteContentItem_item_ContentItemSwitch
  | AbsoluteContentItem_item_ContentItemShowHideBalance
  | AbsoluteContentItem_item_ContentItemDatePicker;

export interface AbsoluteContentItem_styles {
  property: string;
  value: string;
}

export interface AbsoluteContentItem_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface AbsoluteContentItem {
  isBackground: boolean | null;
  item: AbsoluteContentItem_item;
  styles: AbsoluteContentItem_styles[] | null;
  dynamicStyles: AbsoluteContentItem_dynamicStyles[] | null;
}
