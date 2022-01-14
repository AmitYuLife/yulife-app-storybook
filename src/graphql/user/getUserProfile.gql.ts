import gql from "graphql-tag";
import client from "@graphql/_core/client";
import { GetUserProfile } from "@graphql/_core/schema";

const GQL_QUERY_GET_USER_PROFILE = gql`
  query GetUserProfile {
    getUserProfile {
      gameSettings {
        cyclingMeasurement
      }
    }
  }
`;

export default function getUserProfile() {
  return client().query<GetUserProfile>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_PROFILE,
    variables: {},
  });
}
