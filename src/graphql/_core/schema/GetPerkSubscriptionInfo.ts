/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPerkSubscriptionInfo
// ====================================================

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

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_image | null;
  styles: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_styles[] | null;
  wrapperStyles: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemImage_wrapperStyles[] | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string | null;
  markdown: string;
  parsedMarkdown: string | null;
  canCopy: boolean | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton {
  __typename: "ContentItemButton";
  id: string;
  label: string;
  uri: string | null;
  icon: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemButton_icon | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
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
  options: (GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  icon: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  validation:
    | (GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[]
    | null;
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
  icon: GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation:
    | (GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormTextInput_validation | null)[]
    | null;
}

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements =
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSelectInput
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormTextInput
  | GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements_ContentItemFormSubmitButton;

export interface GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm {
  __typename: "ContentItemForm";
  elements: (GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content_ContentItemForm_elements | null)[] | null;
}

export type GetPerkSubscriptionInfo_getPerkSubscriptionInfo_content =
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
