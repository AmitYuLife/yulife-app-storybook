import { GQL_FRAGMENT_DUEL_OPPONENTS } from "@graphql/_fragments/duel.gql";
import gql from "graphql-tag";

export const GQL_QUERY_GET_DUELS_COMPLETED = gql`
  ${GQL_FRAGMENT_DUEL_OPPONENTS}
  query GetDuelsCompleted {
    getDuelsCompleted {
      id
      duels {
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
  }
`;
