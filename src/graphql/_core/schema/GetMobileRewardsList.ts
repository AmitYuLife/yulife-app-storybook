/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMobileRewardsList
// ====================================================

export interface GetMobileRewardsList_data_list_imageUrl {
  id: string;
  uri: string | null;
}

export interface GetMobileRewardsList_data_list_pills {
  __typename: "MobileRewardsListItemPill";
  id: string;
  text: string;
  backgroundColor: string;
}

export interface GetMobileRewardsList_data_list {
  __typename: "MobileRewardsListItem";
  id: string;
  isLocked: boolean;
  name: string;
  description: string;
  imageUrl: GetMobileRewardsList_data_list_imageUrl;
  pills: GetMobileRewardsList_data_list_pills[];
}

export interface GetMobileRewardsList_data_preloadAssets {
  id: string;
  uri: string | null;
}

export interface GetMobileRewardsList_data {
  __typename: "MobileRewardsList";
  id: string;
  tags: string[];
  list: GetMobileRewardsList_data_list[];
  preloadAssets: GetMobileRewardsList_data_preloadAssets[];
}

export interface GetMobileRewardsList {
  data: GetMobileRewardsList_data;
}

export interface GetMobileRewardsListVariables {
  tag?: string | null;
}
