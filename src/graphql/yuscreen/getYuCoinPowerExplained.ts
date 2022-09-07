import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION } from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";

const GQL_QUERY_YU_COIN_POWER_EXPLAINED_ACTIVITY = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  fragment YuCoinPowerExplainedActivity on YuCoinPowerExplainedActivity {
    icon {
      ...RemoteImage
    }
    label
    reward
  }
`;

const GQL_QUERY_YU_COIN_POWER_EXPLAINED_ACTIVITY_GROUP = gql`
  ${GQL_QUERY_YU_COIN_POWER_EXPLAINED_ACTIVITY}
  fragment YuCoinPowerExplainedActivityGroup on YuCoinPowerExplainedActivityGroup {
    title
    items {
      ...YuCoinPowerExplainedActivity
    }
  }
`;

const GQL_QUERY_YU_COIN_POWER_EXPLAINED_ACTIVITIES = gql`
  ${GQL_QUERY_YU_COIN_POWER_EXPLAINED_ACTIVITY_GROUP}
  fragment YuCoinPowerExplainedActivities on YuCoinPowerExplainedActivities {
    heading
    dailyCoreActivities {
      ...YuCoinPowerExplainedActivityGroup
    }
    additionalActivities {
      ...YuCoinPowerExplainedActivityGroup
    }
  }
`;

const GQL_QUERY_YU_COIN_POWER_EXPLAINED_YU_COIN = gql`
  fragment YuCoinPowerExplainedYuCoin on YuCoinPowerExplainedYuCoin {
    title
    description
    earnRate
  }
`;

const GQL_QUERY_YU_COIN_POWER_EXPLAINED_BUTTON = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}
  fragment YuCoinPowerExplainedButton on YuCoinPowerExplainedButton {
    label
    event {
      ...SduiAction
    }
  }
`;

export const GQL_QUERY_GET_YU_COIN_POWER_EXPLAINED = gql`
  ${GQL_QUERY_YU_COIN_POWER_EXPLAINED_ACTIVITIES}
  ${GQL_QUERY_YU_COIN_POWER_EXPLAINED_YU_COIN}
  ${GQL_QUERY_YU_COIN_POWER_EXPLAINED_BUTTON}
  query GetYuCoinPowerExplained {
    getYuCoinPowerExplained {
      activities {
        ...YuCoinPowerExplainedActivities
      }
      heading
      yuCoin {
        ...YuCoinPowerExplainedYuCoin
      }
      button {
        ...YuCoinPowerExplainedButton
      }
    }
  }
`;
