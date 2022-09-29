import { GQL_FRAGMENT_USER_STATISTICS_DETAILS } from "@graphql/_fragments/userStatisticsDetails.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_STATISTICS = gql`
  ${GQL_FRAGMENT_USER_STATISTICS_DETAILS}

  query GetStatistics($userId: String) {
    getStatistics(userId: $userId) {
      current {
        avatar {
          id
          uri
        }
        level
        fullName
        sections {
          general {
            title
            subtitle
            stats {
              ...UserStatisticDetails
            }
          }
          duels {
            title
            subtitle
            stats {
              ...UserStatisticDetails
            }
          }
          activity {
            title
            subtitle
            stats {
              ...UserStatisticDetails
            }
          }
        }
      }
      opponent {
        avatar {
          id
          uri
        }
        level
        fullName
        sections {
          activity {
            title
            subtitle
            stats {
              ...UserStatisticDetails
            }
          }
        }
      }
    }
  }
`;
