/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYuCoinPowerExplained
// ====================================================

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_dailyCoreActivities_items_icon {
  id: string;
  uri: string | null;
}

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_dailyCoreActivities_items {
  icon: GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_dailyCoreActivities_items_icon;
  label: string;
  reward: string;
}

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_dailyCoreActivities {
  title: string;
  items: GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_dailyCoreActivities_items[] | null;
}

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_additionalActivities_items_icon {
  id: string;
  uri: string | null;
}

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_additionalActivities_items {
  icon: GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_additionalActivities_items_icon;
  label: string;
  reward: string;
}

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_additionalActivities {
  title: string;
  items: GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_additionalActivities_items[] | null;
}

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained_activities {
  heading: string;
  dailyCoreActivities: GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_dailyCoreActivities;
  additionalActivities: GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_additionalActivities;
}

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained_yuCoin {
  title: string;
  description: string;
  earnRate: number;
}

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained_button {
  label: string;
  event: GetYuCoinPowerExplained_getYuCoinPowerExplained_button_event | null;
}

export interface GetYuCoinPowerExplained_getYuCoinPowerExplained {
  activities: GetYuCoinPowerExplained_getYuCoinPowerExplained_activities;
  heading: string;
  yuCoin: GetYuCoinPowerExplained_getYuCoinPowerExplained_yuCoin;
  button: GetYuCoinPowerExplained_getYuCoinPowerExplained_button;
}

export interface GetYuCoinPowerExplained {
  /**
   * @Deprecated - RN client version >= 3.110 uses getYuCoinPowerInfo
   */
  getYuCoinPowerExplained: GetYuCoinPowerExplained_getYuCoinPowerExplained;
}
