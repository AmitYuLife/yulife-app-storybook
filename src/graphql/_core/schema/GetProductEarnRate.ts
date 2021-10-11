/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YuScreenEarnRateTableValueType, YuScreenEarnRateTableThemeType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProductEarnRate
// ====================================================

export interface GetProductEarnRate_getProductEarnRate_columns_icons {
  id: string;
  uri: string | null;
}

export interface GetProductEarnRate_getProductEarnRate_columns_header {
  title: string;
  power: string;
}

export interface GetProductEarnRate_getProductEarnRate_columns {
  icons: GetProductEarnRate_getProductEarnRate_columns_icons[] | null;
  values: string[];
  valueType: YuScreenEarnRateTableValueType;
  themeType: YuScreenEarnRateTableThemeType;
  header: GetProductEarnRate_getProductEarnRate_columns_header | null;
  flex: number | null;
}

export interface GetProductEarnRate_getProductEarnRate_footer {
  markdown: string | null;
}

export interface GetProductEarnRate_getProductEarnRate {
  columns: GetProductEarnRate_getProductEarnRate_columns[];
  heading: string;
  footer: GetProductEarnRate_getProductEarnRate_footer | null;
}

export interface GetProductEarnRate {
  /**
   * If optional customerProductId is not given, will
   * return default earn rate table which consists of base earn rate and user current earn rate
   */
  getProductEarnRate: GetProductEarnRate_getProductEarnRate | null;
}

export interface GetProductEarnRateVariables {
  customerProductId?: string | null;
}
