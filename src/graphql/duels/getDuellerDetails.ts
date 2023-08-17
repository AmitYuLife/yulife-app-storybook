import { gql } from "@apollo/client";

export const GQL_QUERY_GET_DUELLER_DETAILS = gql`
  query GetDuellerDetails($opponentId: String!) {
    getDuellerDetails(opponentId: $opponentId) {
      user {
        firstName
        fullName
        avatar
        coins
      }
      opponent {
        firstName
        fullName
        avatar
        coins
      }
      nextStepAlert {
        title
        subtitle
      }
    }
  }
`;
