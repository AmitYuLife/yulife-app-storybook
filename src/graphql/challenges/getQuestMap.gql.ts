import { gql } from "@apollo/client";

export const GQL_QUERY_GET_QUEST_MAP = gql`
  query GetQuestMap {
    levels: getQuestMapLevelList {
      id
      __typename
      level
      rating
      levelChest
    }
  }
`;
