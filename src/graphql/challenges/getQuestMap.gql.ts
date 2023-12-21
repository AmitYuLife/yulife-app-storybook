import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "../_fragments/shared.gql";

export const GQL_QUERY_GET_QUEST_MAP = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  query GetQuestMap {
    levels: getQuestMapLevelList {
      id
      __typename
      level
      rating
      levelChest
      notificationIcon {
        ...RemoteImage
      }
      goals {
        goalId
        milestoneId
      }
    }
  }
`;
