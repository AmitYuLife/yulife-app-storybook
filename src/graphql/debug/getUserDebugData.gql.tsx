import { gql } from "@apollo/client";
import client from "@graphql/_core/client";
import { GetUserDebugData } from "@graphql/_core/schema";

export const GQL_GET_USER_DEBUG_DATA = gql`
  query GetUserDebugData {
    getUserDebugData {
      id
      sampleQuery {
        startTime
        endTime
        fitKitTypes
        disableTypeFilter
        active
      }
    }
  }
`;

export default function getUserDebugData() {
  return client().query<GetUserDebugData>({
    fetchPolicy: "network-only",
    query: GQL_GET_USER_DEBUG_DATA,
    variables: {},
  });
}
