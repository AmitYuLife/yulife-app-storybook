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
// GraphQL fragment: AbsoluteContentItem
// ====================================================

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

export interface AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon {
  icon: AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles: AbsoluteContentItem_item_ContentItemRadio_choices_renderAsIcon_wrapperStyles[] | null;
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
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: AbsoluteContentItem_item_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: AbsoluteContentItem_item_ContentItemHeaderBar_onRightIconPress | null;
  publishKeyHeight: string | null;
}

export interface AbsoluteContentItem_item_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
  publishKeyHeight: string | null;
}

export type AbsoluteContentItem_item =
  | AbsoluteContentItem_item_ContentItemMarkdown
  | AbsoluteContentItem_item_ContentItemBox
  | AbsoluteContentItem_item_ContentItemButton
  | AbsoluteContentItem_item_ContentItemImage
  | AbsoluteContentItem_item_ContentItemForm
  | AbsoluteContentItem_item_ContentItemText
  | AbsoluteContentItem_item_ContentItemTextInput
  | AbsoluteContentItem_item_ContentItemPad
  | AbsoluteContentItem_item_ContentItemRadio
  | AbsoluteContentItem_item_ContentItemHeaderBar
  | AbsoluteContentItem_item_ContentItemProgressBar;

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
