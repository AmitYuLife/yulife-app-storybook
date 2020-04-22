import gql from "graphql-tag";

export const GQL_QUERY_GET_ACTIVITY_HISTORY = gql`
  query GetActivityHistory($monthsAgo: Int, $isFullActivity: Boolean) {
    getActivityHistoryWithLevels(monthsAgo: $monthsAgo, isFullActivity: $isFullActivity) {
      id
      steps
      sources {
        garmin
        fitbit
        device
      }
      yucoin
      dayOfMonth
      dayOfWeek
      monthAndYear
      level
      challenges {
        id
        earned
        milestones
        name
        score
      }
      mindfulSeconds
      mindfulYucoin
    }
  }
`;
