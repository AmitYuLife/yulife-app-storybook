import gql from "graphql-tag";

export const GQL_QUERY_GET_DUEL_TOMORROW = gql`
  query GetDuelsTomorrow {
    getDuelsTomorrow {
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
        duelId
      }
      duration
      type
      yucoin
      status
    }
  }
`;
