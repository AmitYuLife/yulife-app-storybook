import gql from "graphql-tag";

export const GQL_QUERY_GET_CURRENT_WORLD = gql`
  query GetCurrentWorld {
    getCurrentWorld {
      id
      __typename
      level
      levelChestId
      name
      rating
      slots {
        id
        __typename
        availableAtLevel
        timeLimit
        passive
        type
        subtype
        unit
        rating
        yuCoinAwarded
        challengesDetails {
          rating
          yuCoinAwarded
        }
        milestones {
          id
          __typename
          XP
          coins
          target {
            __typename
            steps
            meditation
            distance
          }
        }
      }
    }
  }
`;
