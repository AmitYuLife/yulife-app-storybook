import gql from "graphql-tag";
import { GetCurrentWorld } from "@graphql/_core/schema";
import client from "@graphql/_core/client";

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
        challengesDetails {
          id
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

export function getCurrentLevelWithClient() {
  return client().query<GetCurrentWorld>({
    query: GQL_QUERY_GET_CURRENT_WORLD,
  });
}
