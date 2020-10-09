import gql from "graphql-tag";

export const GQL_QUERY_GET_DUELS = gql`
  query GetDuels {
    getDuels {
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
      }
      duration
      type
      yucoin
      status
    }
  }
`;
