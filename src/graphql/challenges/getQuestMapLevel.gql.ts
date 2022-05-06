import gql from "graphql-tag";

export const GQL_QUERY_GET_QUEST_MAP_LEVEL = gql`
  query GetQuestMapLevel($level: Int!, $yuniversalMap: Int) {
    getQuestMapLevel(level: $level, yuniversalMap: $yuniversalMap) {
      id
      __typename
      level
      levelChest
      slots {
        id
        __typename
        heading
        duration
        image {
          id
          uri
        }
        historyImage {
          id
          uri
        }
        availableAtLevel
        isLocked
        reward
        fitKitTypes
        details {
          heading
          tutorialUrl
          image {
            id
            uri
          }
          milestones {
            id
            target
            rewardAmount
            rewardType
          }
        }
        challenges {
          reward
          rating
        }
      }
    }
  }
`;
