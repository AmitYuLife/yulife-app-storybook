import { gql } from "@apollo/client";
import { GQL_FRAGMENT_USER_COIN_LEDGER } from "@graphql/_fragments/userCoinLedger.gql";
import client from "../_core/client";
import { GetUserCoinLedgerTodayActivity } from "../_core/schema";
import { GQL_FRAGMENT_USER_TODAY_ACTIVITY } from "@graphql/_fragments/userTodayActivity.gql";

export const GQL_QUERY_GET_USER_COIN_LEDGER_TODAY_ACTIVITY = gql`
  ${GQL_FRAGMENT_USER_COIN_LEDGER}
  ${GQL_FRAGMENT_USER_TODAY_ACTIVITY}
  query GetUserCoinLedgerTodayActivity {
    coinLedger: getUserCoinLedger {
      ...UserCoinLedger
    }
    todayActivity: getUserTodayActivity {
      ...UserTodayActivity
    }
  }
`;

export default function getUserCoinLedgerTodayActivity() {
  return client().query<GetUserCoinLedgerTodayActivity>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_COIN_LEDGER_TODAY_ACTIVITY,
  });
}
