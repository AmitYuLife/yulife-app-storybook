/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OS, ContentItemFormTextInputType } from "./globalTypes";

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
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton {
  __typename: "ContentItemButton";
  id: string;
  label: string;
  uri: string | null;
  icon: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton_icon | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage_image | null;
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
