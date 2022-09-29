import { gql } from "@apollo/client";

export const GQL_QUERY_GET_REFERRAL_BACKGROUND = gql`
  query GetReferralBackground {
    getReferralBackground {
      id
      uri
    }
  }
`;
