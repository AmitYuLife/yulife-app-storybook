/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import {
  OS,
  ContentItemButtonType,
  SduiActionType,
  ContentItemButtonSize,
  ContentItemImageSize,
  ContentItemFormTextInputType,
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetWellbeingHubItem
// ====================================================

export interface GetWellbeingHubItem_wellbeingHubItem_thumbnail {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_icon {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemTextInput {
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

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemText_styles {
  property: string;
  value: string;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemText_styles[] | null;
  /**
   * Supported RN Version 3.100.0
   */
  dynamicStyleKey: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle:
    | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemMarkdown_markdownContainerStyle[]
    | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton {
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
  onPress: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_onPress | null;
  event: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_event | null;
  icon: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage_image | null;
  styles: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage_styles[] | null;
  wrapperStyles: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation:
    | (GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormTextInput_validation | null)[]
    | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSelectInput_defaultOption | null;
  icon: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  options: (GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  validation:
    | (GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[]
    | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements =
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormTextInput
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSelectInput
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements_ContentItemFormSubmitButton;

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm {
  __typename: "ContentItemForm";
  elements: (GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm_elements | null)[] | null;
}

export type GetWellbeingHubItem_wellbeingHubItem_content =
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemTextInput
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemText
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemMarkdown
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemBox
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemForm;

export interface GetWellbeingHubItem_wellbeingHubItem {
  id: string;
  title: string;
  description: string;
  thumbnail: GetWellbeingHubItem_wellbeingHubItem_thumbnail | null;
  icon: GetWellbeingHubItem_wellbeingHubItem_icon | null;
  content: GetWellbeingHubItem_wellbeingHubItem_content[] | null;
}

export interface GetWellbeingHubItem {
  wellbeingHubItem: GetWellbeingHubItem_wellbeingHubItem;
}

export interface GetWellbeingHubItemVariables {
  id: string;
  os?: OS | null;
}
