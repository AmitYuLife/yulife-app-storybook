/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRewards
// ====================================================

export interface GetRewards_getRewards_available_denominations {
  __typename: "Denomination";
  yuCoin: number | null;
  value: number | null;
  stock: number | null;
}

export interface GetRewards_getRewards_cardImage {
  id: string;
  uri: string | null;
}

export interface GetRewards_getRewards_redeem_steps {
  __typename: "RedeemSteps";
  id: string | null;
  info: string | null;
  steps: (string | null)[] | null;
}

export interface GetRewards_getRewards_uiSettings {
  __typename: "RewardUiSettings";
  id: string | null;
  logoWidth: number | null;
  logoHeight: number | null;
  ctaLabel: string | null;
  alertHeading: string | null;
  alertSubheading: string | null;
  alertCancelLabel: string | null;
  alertOkLabel: string | null;
  offerHeading: string | null;
  offerSubheading: string | null;
}

export interface GetRewards_getRewards_background {
  id: string;
  uri: string | null;
}

export interface GetRewards_getRewards {
  __typename: "Reward";
  id: string | null;
  reward_sticker: string | null;
  loyalty_programme: (string | null)[] | null;
  rewardProviderId: string | null;
  availability: string | null;
  progression_level: string | null;
  available_denominations: (GetRewards_getRewards_available_denominations | null)[] | null;
  cardImage: GetRewards_getRewards_cardImage | null;
  code: string | null;
  currency_code: string | null;
  denomination_type: string | null;
  description: string | null;
  e_code_usage_type: string | null;
  expiry_date_policy: string | null;
  link_type: string | null;
  maximum_value: number | null;
  minimum_value: number | null;
  name: string | null;
  redeem_steps: GetRewards_getRewards_redeem_steps | null;
  terms_and_conditions_url: string | null;
  uiSettings: GetRewards_getRewards_uiSettings | null;
  logoImageUri: string | null;
  background: GetRewards_getRewards_background | null;
}

export interface GetRewards {
  /**
   * Start of Legacy
   */
  getRewards: (GetRewards_getRewards | null)[] | null;
}

export interface GetRewardsVariables {
  width?: number | null;
  height?: number | null;
}
