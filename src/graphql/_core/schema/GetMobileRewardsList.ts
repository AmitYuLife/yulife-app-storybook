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

export interface GetMobileRewardsList_data_list_teaseDetails_image {
  id: string;
  uri: string | null;
}

export interface GetMobileRewardsList_data_list_teaseDetails_theme {
  primaryColor: string;
  secondaryColor: string;
}

export interface GetMobileRewardsList_data_list_teaseDetails_hint {
  label: string | null;
  description: string | null;
}

export interface GetMobileRewardsList_data_list_teaseDetails {
  progress: number;
  target: number;
  rewardQuantity: number;
  image: GetMobileRewardsList_data_list_teaseDetails_image;
  theme: GetMobileRewardsList_data_list_teaseDetails_theme;
  hint: GetMobileRewardsList_data_list_teaseDetails_hint | null;
  modalTitle: string | null;
}

export interface GetMobileRewardsList_data_list {
  __typename: "MobileRewardsListItem";
  id: string;
  isLocked: boolean;
  showLockedRewardOverlay: boolean;
  name: string;
  description: string;
  imageUrl: GetMobileRewardsList_data_list_imageUrl;
  pills: GetMobileRewardsList_data_list_pills[];
  teaseDetails: GetMobileRewardsList_data_list_teaseDetails | null;
}

export interface GetMobileRewardsList_data {
  __typename: "MobileRewardsList";
  id: string;
  sduiStepId: string;
  rewardStoreLocation: string;
  rewardStoreLocationLabel: string;
  hasUserSelectedStoreLocation: boolean;
  tags: string[];
  list: GetMobileRewardsList_data_list[];
}

export interface GetMobileRewardsList {
  data: GetMobileRewardsList_data;
}

export interface GetMobileRewardsListVariables {
  tag?: string | null;
}
