import { gql } from "@apollo/client";

export const GQL_QUERY_GET_TODAY_EARNINGS = gql`
  query GetTodayEarnings {
    getTodayEarnings {
      header {
        yuCoinToday
        yuCoinPower
      }
      activityFeed {
        id
        title
        titleAccessibility {
          accessibilityLabel
          accessibilityRole
        }
        emptyMessage
        wellDoneBanner {
          uri(options: { width: 654, height: 272 })
        }
        button {
          label
          onPress {
            type
          }
          type
        }
        buttonAccessibility {
          accessibilityLabel
          accessibilityRole
        }
        toast {
          backgroundColor
          borderColor
          description
          iconUrl {
            uri(options: { width: 114, height: 128 })
          }
        }
        questionMarkModal {
          header
          iconUrl {
            uri(options: { width: 48, height: 48 })
          }
          body {
            title
            iconUrl {
              uri(options: { width: 32, height: 32 })
            }
          }
          toast {
            backgroundColor
            borderColor
            description
            iconUrl {
              uri(options: { width: 114, height: 128 })
            }
          }
          accessibility {
            accessibilityLabel
            accessibilityRole
          }
        }
        activityProgress {
          type
          activitySubTotal
          yuCoinSubTotal
          rating
          maxLength
          currentPosition
          accessibility {
            accessibilityLabel
            accessibilityRole
          }
          iconUrl {
            uri(options: { width: 64, height: 64 })
          }
        }
      }
    }
  }
`;
