import { gql } from "@apollo/client";

export const GQL_QUERY_SEARCH_FOR_DUEL_OPPONENT = gql`
  query SearchForDuelOpponent($query: String!, $limit: Int) {
    searchForDuelOpponent(query: $query, limit: $limit) {
      fullName
      customerId
      avatar
    }
  }
`;
