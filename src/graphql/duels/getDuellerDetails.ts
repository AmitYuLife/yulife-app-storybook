import { gql } from "@apollo/client";

export const GQL_QUERY_GET_DUELLER_DETAILS = gql`
  query GetDuellerDetails($opponentId: String!) {
    getDuellerDetails(opponentId: $opponentId) {
      user {
        firstName
        lastName
        avatar
        coins
      }
      opponent {
        firstName
        lastName
        avatar
        coins
      }
    }
  }
`;
