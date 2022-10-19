/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemFormTextInputType } from "./globalTypes";

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
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton {
  __typename: "ContentItemButton";
  id: string;
  label: string;
  uri: string | null;
  icon: GetRewardItemDetails_getRewardItemDetails_content_ContentItemButton_icon | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetRewardItemDetails_getRewardItemDetails_content_ContentItemImage_image | null;
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
