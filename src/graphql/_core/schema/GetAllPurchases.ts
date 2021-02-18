/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPurchases
// ====================================================

export interface GetAllPurchases_getAllPurchases_metadata_avios {
  __typename: "Avios";
  firstName: string | null;
  lastName: string | null;
  loyaltyProgramme: string | null;
  accountNumber: string | null;
}

export interface GetAllPurchases_getAllPurchases_metadata {
  __typename: "Metadata";
  avios: GetAllPurchases_getAllPurchases_metadata_avios | null;
}

export interface GetAllPurchases_getAllPurchases_reward_redeem_steps {
  __typename: "RedeemSteps";
  info: string | null;
  steps: (string | null)[] | null;
}

export interface GetAllPurchases_getAllPurchases_reward {
  __typename: "Reward";
  name: string | null;
  code: string | null;
  description: string | null;
  expiry_date_policy: string | null;
  card_image_url: string | null;
  terms_and_conditions_url: string | null;
  loyalty_programme: (string | null)[] | null;
  redeem_steps: GetAllPurchases_getAllPurchases_reward_redeem_steps | null;
}

export interface GetAllPurchases_getAllPurchases {
  __typename: "Purchase";
  id: string | null;
  userId: string | null;
  rewardProviderId: string | null;
  amount: number | null;
  code: string | null;
  pin: string | null;
  currency_code: string | null;
  expiry_date: string | null;
  name: string | null;
  updatedAt: string | null;
  createdAt: string | null;
  yuCoinsSpent: number | null;
  delivery_url: string | null;
  status: string | null;
  metadata: GetAllPurchases_getAllPurchases_metadata | null;
  reward: GetAllPurchases_getAllPurchases_reward | null;
}

export interface GetAllPurchases {
  getAllPurchases: (GetAllPurchases_getAllPurchases | null)[] | null;
}
