import gql from "graphql-tag";
import client from "../_core/client";
import { GetMobileAssetsWithVersion } from "../_core/schema";

export const GQL_QUERY_MOBILE_ASSETS = gql`
  query GetMobileAssetsWithVersion {
    getMobileAssetsWithVersion {
      assets {
        uri
      }
      version
    }
  }
`;

export default function getMobileAssets() {
  return client().query<GetMobileAssetsWithVersion>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_MOBILE_ASSETS,
  });
}
