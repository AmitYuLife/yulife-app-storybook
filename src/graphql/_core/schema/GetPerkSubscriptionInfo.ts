/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  SduiActionType,
  ContentItemImageSize,
  ContentItemButtonType,
  ContentItemButtonSize,
  ContentItemFormTextInputType,
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPerkSubscriptionInfo
// ====================================================

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemTextInput {
  __typename:
    | "ContentItemTextInput"
    | "ContentItemRowIconTextBanner"
    | "ContentItemLottie"
    | "ContentItemPad"
    | "ContentItemRadio"
    | "ContentItemHeaderBar"
    | "ContentItemProcessingTimer"
    | "ContentItemProgressBar"
    | "ContentItemTextGroup"
    | "ContentItemAccordion"
    | "ContentItemTable"
    | "ContentItemSelectedPackageCard"
    | "ContentItemSectionHeading"
    | "ContentItemInfoCard"
    | "ContentItemDropdownInput"
    | "ContentItemLinearGradient"
    | "ContentItemYuCoinPower"
    | "ContentItemComparisonTableSelectPackage"
    | "ContentItemPerks"
    | "ContentItemPill"
    | "ContentItemDatePicker"
    | "ContentItemSexPicker"
    | "ContentItemDependants"
    | "ContentItemSelectScheme"
    | "ContentItemKeyValueBox"
    | "ContentItemMedia"
    | "ContentItemWrapper"
    | "ContentItemBoxOptionCard"
    | "ContentItemStages"
    | "ContentItemMarkdownBlock"
    | "ContentItemSwitch"
    | "ContentItemShowHideBalance";
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemText_styles {
  property: string;
  value: string;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemText_styles[] | null;
  /**
   * Supported RN version 3.99.0
   */
  dynamicStyleKey: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_image | null;
  styles: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_styles[] | null;
  wrapperStyles: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle:
    | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemMarkdown_markdownContainerStyle[]
    | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton {
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
  onPress: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_onPress | null;
  event: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_event | null;
  icon: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation:
    | (GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormTextInput_validation | null)[]
    | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption | null;
  icon: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  options: (GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  validation:
    | (GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[]
    | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements =
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormTextInput
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSubmitButton;

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm {
  __typename: "ContentItemForm";
  elements: (GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements | null)[] | null;
}

export type GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content =
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemTextInput
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemText
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemMarkdown
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemBox
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm;

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo {
  content: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content[];
}

export interface GetPerkSubscriptionInfo {
  getPerkSubscriptionInfo: GetPerkSubscriptionInfo_getPerkSubscriptionInfo;
}

export interface GetPerkSubscriptionInfoVariables {
  perkId: string;
}
