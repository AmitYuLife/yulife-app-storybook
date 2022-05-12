import gql from "graphql-tag";

export const GQL_QUERY_GET_MOBILE_REWARD_STORE_LOCATIONS = gql`
  query GetMobileRewardStoreLocations {
    data: getMobileRewardStoreLocations {
      __typename
      id
      label
      isSelected
    }
  }
`;
