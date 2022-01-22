/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemYuCoinPower
// ====================================================

export interface ContentItemYuCoinPower_styles {
  property: string;
  value: string;
}

export interface ContentItemYuCoinPower {
  id: string;
  yuCoinPower: number;
  styles: ContentItemYuCoinPower_styles[] | null;
  /**
   * A separate definition to define width with respect to the device's horizontal edges
   * A marginHorizontal at the styles level doesn't work because a hardcoded width should
   * be defined at the Svg parent
   */
  marginHorizontal: number | null;
}
