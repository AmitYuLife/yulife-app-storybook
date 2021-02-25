import { GQL_FRAGMENT_DUEL_OPPONENTS } from "@graphql/_fragments/duel.gql";
import gql from "graphql-tag";

export const GQL_QUERY_GET_DUEL_INVITATIONS = gql`
  ${GQL_FRAGMENT_DUEL_OPPONENTS}
  query GetDuelInvitations {
    getDuelInvitations {
      id
      opponents {
        ...DuelOpponent
      }
      duration
      type
      yucoin
      status
      inviteStatus
    }
  }
`;
