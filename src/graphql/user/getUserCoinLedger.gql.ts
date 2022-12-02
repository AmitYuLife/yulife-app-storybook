import { gql } from "@apollo/client";
import { GQL_FRAGMENT_USER_COIN_LEDGER } from "@graphql/_fragments/userCoinLedger.gql";
import client from "../_core/client";
import { GetUserCoinLedger } from "../_core/schema";

export const GQL_QUERY_GET_USER_COIN_LEDGER = gql`
  ${GQL_FRAGMENT_USER_COIN_LEDGER}
  query GetUserCoinLedger {
    getUserCoinLedger {
      ...UserCoinLedger
    }
  }
`;

export default function getUserCoinLedger() {
  return client().query<GetUserCoinLedger>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_COIN_LEDGER,
  });
}
