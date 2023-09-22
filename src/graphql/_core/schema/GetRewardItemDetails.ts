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
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetRewardItemDetails
// ====================================================

export interface GetRewardItemDetails_getRewardItemDetails_confirmAlert {
  title: string;
  okLabel: string;
  cancelLabel: string;
}

export interface GetRewardItemDetails_getRewardItemDetails_availableDenominations {
  value: number | null;
  stock: number | null;
  yuCoin: number | null;
  label: string | null;
  alertMessage: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemTextInput {
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

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemText_styles {
  property: string;
  value: string;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetRewardItemDetails_getRewardItemDetails_content_ContentItemText_styles[] | null;
  /**
   * Supported RN version 3.99.0
   */
  dynamicStyleKey: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: GetRewardItemDetails_getRewardItemDetails_content_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle:
    | GetRewardItemDetails_getRewardItemDetails_content_ContentItemMarkdown_markdownContainerStyle[]
    | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton {
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
  onPress: GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_onPress | null;
  event: GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_event | null;
  icon: GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage_image | null;
  styles: GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage_styles[] | null;
  wrapperStyles: GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation:
    | (GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormTextInput_validation | null)[]
    | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption | null;
  icon: GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  options: (GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  validation:
    | (GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[]
    | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements =
  | GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormTextInput
  | GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSelectInput
  | GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSubmitButton;

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm {
  __typename: "ContentItemForm";
  elements: (GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements | null)[] | null;
}

export type GetRewardItemDetails_getRewardItemDetails_content =
  | GetRewardItemDetails_getRewardItemDetails_content_ContentItemTextInput
  | GetRewardItemDetails_getRewardItemDetails_content_ContentItemText
  | GetRewardItemDetails_getRewardItemDetails_content_ContentItemMarkdown
  | GetRewardItemDetails_getRewardItemDetails_content_ContentItemBox
  | GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton
  | GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage
  | GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm;

export interface GetRewardItemDetails_getRewardItemDetails {
  id: string;
  name: string;
  code: string;
  rewardProviderId: string | null;
  availability: string;
  rewardSticker: string | null;
  confirmAlert: GetRewardItemDetails_getRewardItemDetails_confirmAlert | null;
  availableDenominations: (GetRewardItemDetails_getRewardItemDetails_availableDenominations | null)[] | null;
  content: GetRewardItemDetails_getRewardItemDetails_content[] | null;
}

export interface GetRewardItemDetails {
  getRewardItemDetails: GetRewardItemDetails_getRewardItemDetails;
}

export interface GetRewardItemDetailsVariables {
  id: string;
}
