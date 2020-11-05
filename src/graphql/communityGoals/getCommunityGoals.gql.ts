import gql from "graphql-tag";

export const GQL_QUERY_GET_COMMUNITY_GOALS = gql`
  query GetCommunityGoals {
    getCommunityGoals {
      id
      title
      description
      startDate
      endDate
      awardDate
      maxJoiners
      goalType
      goalValue
      rewardValue
      rewardType
      rewardMechanism
      isExpired
      youHaveJoined
      participants {
        userId
        avatarUrl
        nickname
        stats {
          value
          lastUpdatedAt
        }
      }
    }
  }
`;
