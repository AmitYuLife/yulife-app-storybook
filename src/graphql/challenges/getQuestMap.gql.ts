import { gql } from "@apollo/client";
import { GQL_FRAGMENT_WEEKLY_GOAL_PROGRESS } from "@graphql/_fragments";

export const GQL_QUERY_GET_QUEST_MAP = gql`
  ${GQL_FRAGMENT_WEEKLY_GOAL_PROGRESS}
  query GetQuestMap {
    levels: getQuestMapLevelList {
      id
      __typename
      level
      rating
      levelChest
    }
    weeklies: getMobileGameWeeklies {
      id
      endDateTime
      hasUnclaimedRewards
      hasJoined
      activityProgress {
        ...MobileWeeklyActivityProgress
      }
    }
  }
`;
