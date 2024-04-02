/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { OS } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetWellbeingHubItems
// ====================================================

export interface GetWellbeingHubItems_items_thumbnail {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItems_items_icon {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItems_items {
  id: string;
  sduiStepId: string;
  thumbnail: GetWellbeingHubItems_items_thumbnail | null;
  icon: GetWellbeingHubItems_items_icon | null;
  title: string;
  description: string;
  route: string | null;
}

export interface GetWellbeingHubItems_categories {
  id: string;
  name: string;
}

export interface GetWellbeingHubItems {
  items: GetWellbeingHubItems_items[];
  categories: GetWellbeingHubItems_categories[];
}

export interface GetWellbeingHubItemsVariables {
  os?: OS | null;
  width?: number | null;
  height?: number | null;
  categories?: (string | null)[] | null;
}
