import { GQL_FRAGMENT_DUEL_OPPONENTS } from "@graphql/_fragments/duel.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_DUEL_TOMORROW = gql`
  ${GQL_FRAGMENT_DUEL_OPPONENTS}
  query GetDuelsTomorrow {
    getDuelsTomorrow {
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
