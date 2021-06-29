/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetReferralInformation
// ====================================================

export interface GetReferralInformation_referralInformation_referralHistory {
  id: string;
  name: string;
  date: string;
  avatarUrl: string | null;
  coin: number;
}

export interface GetReferralInformation_referralInformation {
  rewardForReferral: number;
  referralLink: string;
  referralHistory: GetReferralInformation_referralInformation_referralHistory[];
}

export interface GetReferralInformation {
  referralInformation: GetReferralInformation_referralInformation;
}
