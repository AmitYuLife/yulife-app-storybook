import gql from "graphql-tag";

export const GQL_QUERY_GET_REFERRAL_BACKGROUND = gql`
  query GetReferralBackground {
    getReferralBackground {
      id
      uri
    }
  }
`;
