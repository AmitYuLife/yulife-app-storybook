import { gql } from "@apollo/client";

export const GQL_MUTATION_UPDATE_MOBILE_REWARD_STORE_LOCATION = gql`
  mutation UpdateMobileRewardStoreLocation($location: String!) {
    updateMobileRewardStoreLocation(location: $location)
  }
`;
