/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: YuCoinPowerExplainedActivities
// ====================================================

export interface YuCoinPowerExplainedActivities_dailyCoreActivities_items_icon {
  id: string;
  uri: string | null;
}

export interface YuCoinPowerExplainedActivities_dailyCoreActivities_items {
  icon: YuCoinPowerExplainedActivities_dailyCoreActivities_items_icon;
  label: string;
  reward: string;
}

export interface YuCoinPowerExplainedActivities_dailyCoreActivities {
  title: string;
  items: YuCoinPowerExplainedActivities_dailyCoreActivities_items[] | null;
}

export interface YuCoinPowerExplainedActivities_additionalActivities_items_icon {
  id: string;
  uri: string | null;
}

export interface YuCoinPowerExplainedActivities_additionalActivities_items {
  icon: YuCoinPowerExplainedActivities_additionalActivities_items_icon;
  label: string;
  reward: string;
}

export interface YuCoinPowerExplainedActivities_additionalActivities {
  title: string;
  items: YuCoinPowerExplainedActivities_additionalActivities_items[] | null;
}

export interface YuCoinPowerExplainedActivities {
  heading: string;
  dailyCoreActivities: YuCoinPowerExplainedActivities_dailyCoreActivities;
  additionalActivities: YuCoinPowerExplainedActivities_additionalActivities;
}
