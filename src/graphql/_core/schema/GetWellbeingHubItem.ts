/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OS } from "./globalTypes";

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

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string;
  markdown: string;
  parsedMarkdown: string | null;
}

export interface GetWellbeingHubItem_wellbeingHubItem_content_ContentItemBox {
  __typename: "ContentItemBox";
  id: string;
  title: string;
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
  uri: string;
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

export type GetWellbeingHubItem_wellbeingHubItem_content =
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemMarkdown
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemBox
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton
  | GetWellbeingHubItem_wellbeingHubItem_content_ContentItemImage;

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
