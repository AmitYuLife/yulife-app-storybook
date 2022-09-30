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
    weeklies: getMobileGameWeeklies {
      id
      endDateTime
      hasUnclaimedRewards
      activityProgress {
        id
        activitySubTotal
        yuCoinSubTotal
        currentPosition
        maxLength
        isClaimable
        isClaimed
        iconUrl {
          id
          uri
        }
      }
    }
  }
`;
