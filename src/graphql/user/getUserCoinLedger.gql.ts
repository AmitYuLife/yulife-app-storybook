import { gql } from "@apollo/client";
import { GQL_FRAGMENT_USER_COIN_LEDGER } from "@graphql/_fragments/userCoinLedger.gql";
import client from "../_core/client";
import { GetUserCoinLedger } from "@graphql/_core/schema";

export const GQL_QUERY_GET_USER_COIN_LEDGER = gql`
  ${GQL_FRAGMENT_USER_COIN_LEDGER}
  query GetUserCoinLedger {
    coinLedger: getUserCoinLedger {
      ...UserCoinLedger
    }
  }
`;

export default function getUserCoinLedger() {
  return client().query<GetUserCoinLedger>({
    fetchPolicy: "network-only",
    query: GQL_FRAGMENT_USER_COIN_LEDGER,
  });
}
