import { gql } from "@apollo/client";

export const GQL_FRAGMENT_USER_COIN_LEDGER = gql`
  fragment UserCoinLedger on CoinLedger {
    currentBalance
    currentLevel
    yuniversalMap
    yuniversalLevel
    nextLevelAvailableAt
  }
`;
