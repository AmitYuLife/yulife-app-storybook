import { gql } from "@apollo/client";
import client from "../_core/client";
import { GetTotalCoins } from "../_core/schema";

export const GQL_QUERY_GET_TOTAL_COINS = gql`
  query GetTotalCoins {
    getTotalCoins
  }
`;

export default function getTotalCoins() {
  return client().query<GetTotalCoins>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_TOTAL_COINS,
    variables: {},
  });
}
