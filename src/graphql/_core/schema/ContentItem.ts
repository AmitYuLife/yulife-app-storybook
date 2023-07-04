/* tslint:disable */

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
// GraphQL fragment: ContentItem
// ====================================================

export interface ContentItem_ContentItemProcessingTimer {
  __typename:
    | "ContentItemProcessingTimer"
    | "ContentItemTable"
    | "ContentItemSelectedPackageCard"
    | "ContentItemSectionHeading"
    | "ContentItemYuCoinPower"
    | "ContentItemComparisonTableSelectPackage"
    | "ContentItemPerks"
    | "ContentItemPill"
    | "ContentItemDatePicker"
    | "ContentItemSexPicker"
    | "ContentItemDependants"
    | "ContentItemSelectScheme"
    | "ContentItemKeyValueBox"
    | "ContentItemStages"
    | "ContentItemMarkdownBlock";
}

export interface ContentItem_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: ContentItem_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle: ContentItem_ContentItemMarkdown_markdownContainerStyle[] | null;
}

export interface ContentItem_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface ContentItem_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemButton {
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
  onPress: ContentItem_ContentItemButton_onPress | null;
  event: ContentItem_ContentItemButton_event | null;
  icon: ContentItem_ContentItemButton_icon | null;
  contentItemButtonRightIcon: ContentItem_ContentItemButton_contentItemButtonRightIcon | null;
  styles: ContentItem_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: ContentItem_ContentItemButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItem_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: ContentItem_ContentItemImage_image | null;
  styles: ContentItem_ContentItemImage_styles[] | null;
  wrapperStyles: ContentItem_ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: ContentItem_ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}

export interface ContentItem_ContentItemForm_elements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemForm_elements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface ContentItem_ContentItemForm_elements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: ContentItem_ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation: (ContentItem_ContentItemForm_elements_ContentItemFormTextInput_validation | null)[] | null;
}

export interface ContentItem_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface ContentItem_ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface ContentItem_ContentItemForm_elements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface ContentItem_ContentItemForm_elements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: ContentItem_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption | null;
  icon: ContentItem_ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  options: (ContentItem_ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  validation: (ContentItem_ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[] | null;
}

export interface ContentItem_ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type ContentItem_ContentItemForm_elements =
  | ContentItem_ContentItemForm_elements_ContentItemFormTextInput
  | ContentItem_ContentItemForm_elements_ContentItemFormSelectInput
  | ContentItem_ContentItemForm_elements_ContentItemFormSubmitButton;

export interface ContentItem_ContentItemForm {
  __typename: "ContentItemForm";
  elements: (ContentItem_ContentItemForm_elements | null)[] | null;
}

export interface ContentItem_ContentItemText_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: ContentItem_ContentItemText_styles[] | null;
}

export interface ContentItem_ContentItemTextInput_validation {
  validationName: string;
  validationValue: string;
}

export interface ContentItem_ContentItemTextInput_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemTextInput {
  __typename: "ContentItemTextInput";
  id: string;
  heading: string | null;
  answerKey: string;
  type: ContentItemFormTextInputType | null;
  prefixValue: string | null;
  validation: (ContentItem_ContentItemTextInput_validation | null)[] | null;
  /**
   * Supported RN version 3.58.0
   */
  styles: ContentItem_ContentItemTextInput_styles[] | null;
}

export interface ContentItem_ContentItemDropdownInput_validation {
  validationName: string;
  validationValue: string;
}

export interface ContentItem_ContentItemDropdownInput_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemDropdownInput_dropdownOptions {
  label: string | null;
  value: string | null;
}

export interface ContentItem_ContentItemDropdownInput {
  __typename: "ContentItemDropdownInput";
  id: string;
  heading: string | null;
  answerKey: string;
  validation: (ContentItem_ContentItemDropdownInput_validation | null)[] | null;
  styles: ContentItem_ContentItemDropdownInput_styles[] | null;
  dropdownOptions: (ContentItem_ContentItemDropdownInput_dropdownOptions | null)[];
  selectInstruction: string | null;
}

export interface ContentItem_ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemRowIconTextBanner_bannerButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemRowIconTextBanner_bannerButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemRowIconTextBanner_bannerButton_icon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemRowIconTextBanner_bannerButton_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemRowIconTextBanner_bannerButton_containerStyles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemRowIconTextBanner_bannerButton {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: ContentItem_ContentItemRowIconTextBanner_bannerButton_onPress | null;
  event: ContentItem_ContentItemRowIconTextBanner_bannerButton_event | null;
  icon: ContentItem_ContentItemRowIconTextBanner_bannerButton_icon | null;
  contentItemButtonRightIcon: ContentItem_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon | null;
  styles: ContentItem_ContentItemRowIconTextBanner_bannerButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: ContentItem_ContentItemRowIconTextBanner_bannerButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItem_ContentItemRowIconTextBanner_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemRowIconTextBanner_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemRowIconTextBanner_containerActions {
  id: string;
  event: ContentItem_ContentItemRowIconTextBanner_containerActions_event | null;
  onPress: ContentItem_ContentItemRowIconTextBanner_containerActions_onPress;
}

export interface ContentItem_ContentItemRowIconTextBanner {
  __typename: "ContentItemRowIconTextBanner";
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: ContentItem_ContentItemRowIconTextBanner_bannerIcon;
  styles: ContentItem_ContentItemRowIconTextBanner_styles[] | null;
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
  bannerButton: ContentItem_ContentItemRowIconTextBanner_bannerButton | null;
  /**
   * RN client version >= 3.45.0: icon field is required, so showIcon is used
   * here for backward compatibility to conditionally hide the icon
   */
  showIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: ContentItem_ContentItemRowIconTextBanner_containerActions | null;
}

export interface ContentItem_ContentItemLottie_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemLottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemLottie {
  __typename: "ContentItemLottie";
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: ContentItem_ContentItemLottie_styles[] | null;
  onAnimationEnd: ContentItem_ContentItemLottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface ContentItem_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface ContentItem_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: ContentItem_ContentItemPad_styles[] | null;
  dynamicStyles: ContentItem_ContentItemPad_dynamicStyles[] | null;
}

export interface ContentItem_ContentItemRadio_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemRadio_choices_renderAsIcon_icon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemRadio_choices_renderAsIcon_selectedStyles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemRadio_choices_renderAsIcon_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemRadio_choices_renderAsIcon {
  icon: ContentItem_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: ContentItem_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles: ContentItem_ContentItemRadio_choices_renderAsIcon_wrapperStyles[] | null;
  innerWrapperStyles: ContentItem_ContentItemRadio_choices_renderAsIcon_innerWrapperStyles[] | null;
  boxOptionHeight: number | null;
  imageWidth: number | null;
  imageHeight: number | null;
}

export interface ContentItem_ContentItemRadio_choices {
  label: string;
  value: string;
  renderAsIcon: ContentItem_ContentItemRadio_choices_renderAsIcon | null;
}

export interface ContentItem_ContentItemRadio {
  __typename: "ContentItemRadio";
  id: string;
  iconOptions: boolean;
  answerKey: string;
  styles: ContentItem_ContentItemRadio_styles[] | null;
  choices: ContentItem_ContentItemRadio_choices[];
}

export interface ContentItem_ContentItemHeaderBar_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemHeaderBar_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemHeaderBar {
  __typename: "ContentItemHeaderBar";
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: ContentItem_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: ContentItem_ContentItemHeaderBar_onRightIconPress | null;
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

export interface ContentItem_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
  publishKeyHeight: string | null;
}

export interface ContentItem_ContentItemTextGroup_items_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemTextGroup_items_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemTextGroup_items_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemTextGroup_items_labelStyles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemTextGroup_items {
  label: string;
  onPress: ContentItem_ContentItemTextGroup_items_onPress | null;
  rightIcon: ContentItem_ContentItemTextGroup_items_rightIcon | null;
  styles: ContentItem_ContentItemTextGroup_items_styles[] | null;
  labelStyles: ContentItem_ContentItemTextGroup_items_labelStyles[] | null;
}

export interface ContentItem_ContentItemTextGroup_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemTextGroup {
  __typename: "ContentItemTextGroup";
  id: string;
  items: ContentItem_ContentItemTextGroup_items[];
  styles: ContentItem_ContentItemTextGroup_styles[] | null;
}

export interface ContentItem_ContentItemAccordion_headerIcon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemAccordion_infoIcon {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemAccordion_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemAccordion_items_info_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemAccordion_items_info {
  onPress: ContentItem_ContentItemAccordion_items_info_onPress | null;
}

export interface ContentItem_ContentItemAccordion_items {
  leftText: string;
  rightTextBody: string | null;
  rightTextLabel: string | null;
  info: ContentItem_ContentItemAccordion_items_info | null;
}

export interface ContentItem_ContentItemAccordion {
  __typename: "ContentItemAccordion";
  id: string;
  heading: string | null;
  headerIcon: ContentItem_ContentItemAccordion_headerIcon | null;
  infoIcon: ContentItem_ContentItemAccordion_infoIcon | null;
  styles: ContentItem_ContentItemAccordion_styles[] | null;
  items: ContentItem_ContentItemAccordion_items[];
  subheading: string | null;
}

export interface ContentItem_ContentItemMedia_source {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemMedia_mediaLogo {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemMedia_poster {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemMedia_videoLogo {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemMedia_thumbnail {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemMedia_lottie_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemMedia_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemMedia_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: ContentItem_ContentItemMedia_lottie_styles[] | null;
  onAnimationEnd: ContentItem_ContentItemMedia_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface ContentItem_ContentItemMedia_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemMedia_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemMedia_onStart {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemMedia_onEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemMedia {
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
  source: ContentItem_ContentItemMedia_source;
  mediaLogo: ContentItem_ContentItemMedia_mediaLogo;
  poster: ContentItem_ContentItemMedia_poster;
  videoLogo: ContentItem_ContentItemMedia_videoLogo | null;
  thumbnail: ContentItem_ContentItemMedia_thumbnail;
  lottie: ContentItem_ContentItemMedia_lottie | null;
  onLeftIconPress: ContentItem_ContentItemMedia_onLeftIconPress | null;
  onRightIconPress: ContentItem_ContentItemMedia_onRightIconPress | null;
  onStart: ContentItem_ContentItemMedia_onStart | null;
  onEnd: ContentItem_ContentItemMedia_onEnd | null;
}

export interface ContentItem_ContentItemLinearGradient_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemLinearGradient_start {
  x: number;
  y: number;
}

export interface ContentItem_ContentItemLinearGradient_end {
  x: number;
  y: number;
}

export interface ContentItem_ContentItemLinearGradient {
  __typename: "ContentItemLinearGradient";
  id: string;
  colors: string[];
  styles: ContentItem_ContentItemLinearGradient_styles[] | null;
  start: ContentItem_ContentItemLinearGradient_start | null;
  end: ContentItem_ContentItemLinearGradient_end | null;
}

export interface ContentItem_ContentItemWrapper_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemWrapper_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemWrapper {
  __typename: "ContentItemWrapper";
  id: string;
  styles: ContentItem_ContentItemWrapper_styles[] | null;
  children: string;
  pointerEvents: RNViewPointerEvents | null;
  /**
   * Supported RN version 3.85.0
   */
  absolute: string | null;
  /**
   * Supported RN version 3.87.0
   */
  onPress: ContentItem_ContentItemWrapper_onPress | null;
  /**
   * Supported RN version 3.87.0
   */
  scrollViewProps: string | null;
}

export interface ContentItem_ContentItemInfoCard_image {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemInfoCard_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemInfoCard_hyperlink {
  title: string;
  url: string;
}

export interface ContentItem_ContentItemInfoCard {
  __typename: "ContentItemInfoCard";
  id: string;
  image: ContentItem_ContentItemInfoCard_image | null;
  markdown: string;
  styles: ContentItem_ContentItemInfoCard_styles[] | null;
  hyperlink: ContentItem_ContentItemInfoCard_hyperlink | null;
}

export interface ContentItem_ContentItemBoxOptionCard_image {
  id: string;
  uri: string | null;
}

export interface ContentItem_ContentItemBoxOptionCard_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemBoxOptionCard_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemBoxOptionCard {
  __typename: "ContentItemBoxOptionCard";
  id: string;
  contentItemBoxOptionCardTitle: string | null;
  contentItemBoxOptionCardDescription: string | null;
  contentItemBoxOptionCardDescriptionTextType: string | null;
  image: ContentItem_ContentItemBoxOptionCard_image | null;
  onPress: ContentItem_ContentItemBoxOptionCard_onPress | null;
  styles: ContentItem_ContentItemBoxOptionCard_styles[] | null;
}

export interface ContentItem_ContentItemSwitch_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemSwitch_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemSwitch_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItem_ContentItemSwitch {
  __typename: "ContentItemSwitch";
  id: string;
  styles: ContentItem_ContentItemSwitch_styles[] | null;
  wrapperStyles: ContentItem_ContentItemSwitch_wrapperStyles[] | null;
  onPress: ContentItem_ContentItemSwitch_onPress | null;
  defaultValue: boolean;
}

export interface ContentItem_ContentItemShowHideBalance_styles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemShowHideBalance_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItem_ContentItemShowHideBalance {
  __typename: "ContentItemShowHideBalance";
  id: string;
  balance: string;
  currency: string;
  balanceDescription: string | null;
  balanceDescriptionValue: string | null;
  styles: ContentItem_ContentItemShowHideBalance_styles[] | null;
  wrapperStyles: ContentItem_ContentItemShowHideBalance_wrapperStyles[] | null;
}

export type ContentItem =
  | ContentItem_ContentItemProcessingTimer
  | ContentItem_ContentItemMarkdown
  | ContentItem_ContentItemBox
  | ContentItem_ContentItemButton
  | ContentItem_ContentItemImage
  | ContentItem_ContentItemForm
  | ContentItem_ContentItemText
  | ContentItem_ContentItemTextInput
  | ContentItem_ContentItemDropdownInput
  | ContentItem_ContentItemRowIconTextBanner
  | ContentItem_ContentItemLottie
  | ContentItem_ContentItemPad
  | ContentItem_ContentItemRadio
  | ContentItem_ContentItemHeaderBar
  | ContentItem_ContentItemProgressBar
  | ContentItem_ContentItemTextGroup
  | ContentItem_ContentItemAccordion
  | ContentItem_ContentItemMedia
  | ContentItem_ContentItemLinearGradient
  | ContentItem_ContentItemWrapper
  | ContentItem_ContentItemInfoCard
  | ContentItem_ContentItemBoxOptionCard
  | ContentItem_ContentItemSwitch
  | ContentItem_ContentItemShowHideBalance;
