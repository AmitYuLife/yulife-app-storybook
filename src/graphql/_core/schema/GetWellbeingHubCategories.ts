/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { OS } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetWellbeingHubCategories
// ====================================================

export interface GetWellbeingHubCategories_wellbeingHubCategories {
  id: string;
  name: string;
}

export interface GetWellbeingHubCategories {
  wellbeingHubCategories: GetWellbeingHubCategories_wellbeingHubCategories[];
}

export interface GetWellbeingHubCategoriesVariables {
  os?: OS | null;
}
