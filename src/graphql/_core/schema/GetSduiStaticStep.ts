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
  RNViewPointerEvents,
  ContentItemProgressBarType,
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSduiStaticStep
// ====================================================

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

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon {
  icon: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles: GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio_choices_renderAsIcon_wrapperStyles[] | null;
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
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: GetSduiStaticStep_getSduiStaticStep_body_ContentItemHeaderBar_onRightIconPress | null;
  publishKeyHeight: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_body_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
  publishKeyHeight: string | null;
}

export type GetSduiStaticStep_getSduiStaticStep_body =
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemMarkdown
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemBox
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemButton
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemImage
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemForm
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemText
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemPad
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemRadio
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemHeaderBar
  | GetSduiStaticStep_getSduiStaticStep_body_ContentItemProgressBar;

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

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon {
  icon: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles:
    | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio_choices_renderAsIcon_wrapperStyles[]
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
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemHeaderBar_onRightIconPress | null;
  publishKeyHeight: string | null;
}

export interface GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
  publishKeyHeight: string | null;
}

export type GetSduiStaticStep_getSduiStaticStep_absolute_item =
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemMarkdown
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemBox
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemButton
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemImage
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemForm
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemText
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemPad
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemRadio
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemHeaderBar
  | GetSduiStaticStep_getSduiStaticStep_absolute_item_ContentItemProgressBar;

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
}
