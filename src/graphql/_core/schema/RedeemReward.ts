/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductMetadata } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: RedeemReward
// ====================================================

export interface RedeemReward_redeemReward_metadata_avios {
  __typename: "Avios";
  firstName: string | null;
  lastName: string | null;
  loyaltyProgramme: string | null;
  accountNumber: string | null;
}

export interface RedeemReward_redeemReward_metadata {
  __typename: "Metadata";
  avios: RedeemReward_redeemReward_metadata_avios | null;
}

export interface RedeemReward_redeemReward_reward_redeem_steps {
  __typename: "RedeemSteps";
  info: string | null;
  steps: (string | null)[] | null;
}

export interface RedeemReward_redeemReward_reward {
  __typename: "Reward";
  name: string | null;
  description: string | null;
  card_image_url: string | null;
  terms_and_conditions_url: string | null;
  loyalty_programme: (string | null)[] | null;
  redeem_steps: RedeemReward_redeemReward_reward_redeem_steps | null;
}

export interface RedeemReward_redeemReward {
  id: string | null;
  userId: string | null;
  rewardProviderId: string | null;
  amount: number | null;
  code: string | null;
  currency_code: string | null;
  pin: string | null;
  expiry_date: string | null;
  name: string | null;
  yuCoinsSpent: number | null;
  delivery_url: string | null;
  updatedAt: string | null;
  createdAt: string | null;
  metadata: RedeemReward_redeemReward_metadata | null;
  reward: RedeemReward_redeemReward_reward | null;
}

export interface RedeemReward {
  redeemReward: RedeemReward_redeemReward | null;
}

export interface RedeemRewardVariables {
  id: string;
  amount: number;
  metadata?: ProductMetadata | null;
}
