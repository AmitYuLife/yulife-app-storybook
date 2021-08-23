import gql from "graphql-tag";
import client from "../_core/client";
import { GetMobileAssets } from "../_core/schema";

export const GQL_QUERY_MOBILE_ASSETS = gql`
  query GetMobileAssets {
    getMobileAssets {
      uri
    }
  }
`;

export default function getMobileAssets() {
  return client().query<GetMobileAssets>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_MOBILE_ASSETS,
  });
}
