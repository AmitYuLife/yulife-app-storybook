/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OS } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetWellbeingHubItems
// ====================================================

export interface GetWellbeingHubItems_wellbeingHubItems_thumbnail {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItems_wellbeingHubItems_icon {
  id: string;
  uri: string | null;
}

export interface GetWellbeingHubItems_wellbeingHubItems {
  id: string;
  sduiStepId: string;
  thumbnail: GetWellbeingHubItems_wellbeingHubItems_thumbnail | null;
  icon: GetWellbeingHubItems_wellbeingHubItems_icon | null;
  title: string;
  description: string;
  route: string | null;
}

export interface GetWellbeingHubItems {
  wellbeingHubItems: GetWellbeingHubItems_wellbeingHubItems[];
}

export interface GetWellbeingHubItemsVariables {
  os?: OS | null;
  width?: number | null;
  height?: number | null;
  categories?: (string | null)[] | null;
}
