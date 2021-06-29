import gql from "graphql-tag";

export const GQL_QUERY_GET_REFERRAL_INFORMATION = gql`
  query GetReferralInformation {
    referralInformation {
      rewardForReferral
      referralLink
      referralHistory {
        id
        name
        date
        avatarUrl
        coin
      }
    }
  }
`;
