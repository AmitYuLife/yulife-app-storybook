import gql from "graphql-tag";

export const GQL_QUERY_GET_EARN_RATE_DETAILS = gql`
  query EarnRateDetails {
    getEarnRateDetails {
      icon
      label
      standardValue
    }
  }
`;
