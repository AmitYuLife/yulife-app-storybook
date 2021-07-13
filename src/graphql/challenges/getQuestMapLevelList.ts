import gql from "graphql-tag";

export const GQL_QUERY_GET_QUEST_MAP_LEVEL_LIST = gql`
  query GetQuestMapLevelList {
    getQuestMapLevelList {
      id
      __typename
      level
      rating
      levelChest
    }
  }
`;
