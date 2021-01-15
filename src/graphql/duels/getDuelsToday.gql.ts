import gql from "graphql-tag";

export const GQL_QUERY_GET_DUELS_TODAY = gql`
  query GetDuelsToday {
    getDuelsToday {
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
      updatedAt
    }
  }
`;
