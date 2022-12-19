import { gql } from "@apollo/client";
import client from "../_core/client";
import { GetPublicYuAPIConfig } from "../_core/schema";

export const GQL_QUERY_GET_API_CONFIG = gql`
  query GetPublicYuAPIConfig {
    config: getPublicYuAPIConfig {
      language
      stripeKey
      mixpanelKey
      urls {
        members
        website
        privacyPolicy
        rewardsPolicy
      }
      intercom {
        appId
        ios
        android
      }
      leanplum {
        appId
        prodKey
        devKey
      }
    }
  }
`;

export function getApiConfigWithClient() {
  return client().query<GetPublicYuAPIConfig>({
    fetchPolicy: "no-cache",
    query: GQL_QUERY_GET_API_CONFIG,
  });
}
