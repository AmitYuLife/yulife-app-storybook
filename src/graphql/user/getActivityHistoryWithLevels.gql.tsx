import { gql } from "@apollo/client";

export const GQL_QUERY_GET_ACTIVITY_HISTORY = gql`
  query GetActivityHistoryWithLevels($monthsAgo: Int, $isFullActivity: Boolean) {
    getActivityHistoryWithLevels(monthsAgo: $monthsAgo, isFullActivity: $isFullActivity) {
      id
      steps
      sources {
        garmin
        fitbit
        strava
        withings
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
      pensionYucoin
      cycling
      cyclingSources {
        garmin
        fitbit
        strava
        withings
        device
      }
      cyclingYucoin
    }
  }
`;
