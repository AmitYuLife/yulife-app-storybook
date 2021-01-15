import gql from "graphql-tag";

export const GQL_QUERY_GET_DUELS_COMPLETED = gql`
  query GetDuelsCompleted {
    getDuelsCompleted {
      id
      duels {
        id
        opponents {
          userId
          score
          status
          startDateTime
          name {
            firstName
            lastName
          }
          avatar
        }
        duration
        type
        yucoin
        status
      }
    }
  }
`;
