import { gql } from "@apollo/client";

export const GQL_QUERY_GET_RECENT_DUEL_OPPONENTS = gql`
  query GetRecentDuelOpponents($limit: Int) {
    getRecentDuelOpponents(limit: $limit) {
      fullName
      customerId
      avatar
    }
  }
`;
