import { gql } from "@apollo/client";

export const GQL_QUERY_GET_QUEST_MAP_LEVEL = gql`
  query GetQuestMapLevel($level: Int!, $yuniversalMap: Int) {
    getQuestMapLevel(level: $level, yuniversalMap: $yuniversalMap) {
      id
      __typename
      level
      levelChest
      slots {
        __typename
        id
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
          internalContent {
            contentType
            contentMediaTags
            title
            description
            logo {
              id
              uri
            }
            buttons {
              title
              color
              logo {
                id
                uri
              }
              width
              height
              options {
                iosUrl
                androidUrl
                appName
                appStoreId
                appStoreLocale
                playStoreId
                faqUrl
              }
            }
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
