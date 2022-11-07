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
// GraphQL fragment: ContentItem
// ====================================================

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

export interface ContentItem_ContentItemRadio_choices_renderAsIcon {
  icon: ContentItem_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: ContentItem_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
  wrapperStyles: ContentItem_ContentItemRadio_choices_renderAsIcon_wrapperStyles[] | null;
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
}

export interface ContentItem_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
  publishKeyHeight: string | null;
}

export type ContentItem =
  | ContentItem_ContentItemMarkdown
  | ContentItem_ContentItemBox
  | ContentItem_ContentItemButton
  | ContentItem_ContentItemImage
  | ContentItem_ContentItemForm
  | ContentItem_ContentItemText
  | ContentItem_ContentItemPad
  | ContentItem_ContentItemRadio
  | ContentItem_ContentItemHeaderBar
  | ContentItem_ContentItemProgressBar;
