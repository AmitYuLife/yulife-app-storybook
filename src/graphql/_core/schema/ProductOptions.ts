/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, YuWorld } from "./globalTypes";

// ====================================================
// GraphQL fragment: ProductOptions
// ====================================================

export interface ProductOptions_styles {
  world: YuWorld | null;
  name: string | null;
  icon: string | null;
  background: string | null;
  armor: string | null;
}

export interface ProductOptions_powers {
  id: string | null;
  title: string | null;
  description: string | null;
  icon: string | null;
}

export interface ProductOptions {
  type: CoverType | null;
  earnRate: number | null;
  heading: string | null;
  percentageCovered: number | null;
  styles: (ProductOptions_styles | null)[] | null;
  powers: (ProductOptions_powers | null)[] | null;
}
