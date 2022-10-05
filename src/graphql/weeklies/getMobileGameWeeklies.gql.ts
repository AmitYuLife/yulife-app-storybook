import { gql } from "@apollo/client";
import { GQL_FRAGMENT_WEEKLY_GOAL_PROGRESS } from "@graphql/_fragments";

export const GQL_QUERY_GET_GAME_WEEKLIES = gql`
  ${GQL_FRAGMENT_WEEKLY_GOAL_PROGRESS}
  query GetMobileGameWeeklies {
    getMobileGameWeeklies {
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
