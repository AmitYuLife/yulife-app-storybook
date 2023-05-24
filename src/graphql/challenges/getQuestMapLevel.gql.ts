import { gql } from "@apollo/client";

export const GQL_QUERY_GET_QUEST_MAP_LEVEL = gql`
  query GetQuestMapLevel($level: Int!, $yuniversalMap: Int) {
    getQuestMapLevel(level: $level, yuniversalMap: $yuniversalMap) {
      id
      __typename
      level
      levelChest
      date
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
        isCompleted
        reward
        fitKitTypes
        type
        subtype
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
            promotionReward {
              title
              description
              logo {
                id
                uri
              }
              backgroundImage {
                id
                uri
              }
              discount
              buttonLabel
              rewardId
              sduiAction {
                type
                payload
              }
            }
          }
        }
        challenges {
          id
          reward
          rating
          label
          iconUrl {
            uri(options: { width: 48, height: 48 })
          }
        }
      }
    }
  }
`;
