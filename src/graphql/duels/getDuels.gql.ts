import { GQL_FRAGMENT_DUEL_OPPONENTS } from "@graphql/_fragments/duel.gql";
import { gql } from "@apollo/client";
import client from "../_core/client";

export const GQL_QUERY_GET_DUELS = gql`
  ${GQL_FRAGMENT_DUEL_OPPONENTS}
  query GetDuels {
    getDuels {
      id
      opponents {
        ...DuelOpponent
      }
      duration
      type
      yucoin
      status
    }
  }
`;

export default function getDuelsWithClient() {
  return client().query({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_DUELS,
  });
}
