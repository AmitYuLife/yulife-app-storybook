import { GQL_FRAGMENT_REMOTE_IMAGE } from "@graphql/_fragments/shared.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_MOBILE_REWARDS_LIST = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  query GetMobileRewardsList($tag: String) {
    data: getMobileRewardsList(tag: $tag) {
      __typename
      id
      sduiStepId
      rewardStoreLocation
      rewardStoreLocationLabel
      hasUserSelectedStoreLocation
      tags
      list {
        __typename
        id
        isLocked
        name
        description
        imageUrl {
          ...RemoteImage
        }
        pills {
          __typename
          id
          text
          backgroundColor
        }
      }
    }
  }
`;
