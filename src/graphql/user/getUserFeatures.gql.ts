import { gql } from "@apollo/client";
import { GetUserFeatures } from "@graphql/_core/schema";
import { GQL_FRAGMENT_USER_FEATURES } from "@graphql/_fragments/userFeatures.gql";
import client from "../_core/client";

export const GQL_QUERY_GET_USER_FEATURES = gql`
  ${GQL_FRAGMENT_USER_FEATURES}
  query GetUserFeatures {
    getUserFeatures {
      ...UserFeature
    }
  }
`;

export default function getUserFeatures() {
  return client().query<GetUserFeatures>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_FEATURES,
  });
}
