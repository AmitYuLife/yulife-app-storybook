/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: YuCoinPowerExplainedActivityGroup
// ====================================================

export interface YuCoinPowerExplainedActivityGroup_items_icon {
  id: string;
  uri: string | null;
}

export interface YuCoinPowerExplainedActivityGroup_items {
  icon: YuCoinPowerExplainedActivityGroup_items_icon;
  label: string;
  reward: string;
}

export interface YuCoinPowerExplainedActivityGroup {
  title: string;
  items: YuCoinPowerExplainedActivityGroup_items[] | null;
}
