import { gql } from "@apollo/client";
import { GetAllUserData } from "@graphql/_core/schema";
import { IntercomHashMethod } from "@graphql/_core/schema/globalTypes";
import client from "../_core/client";
import { Platform } from "react-native";
import { GQL_FRAGMENT_USER_COIN_LEDGER } from "@graphql/_fragments/userCoinLedger.gql";
import { GQL_FRAGMENT_USER_TODAY_ACTIVITY } from "@graphql/_fragments/userTodayActivity.gql";
import { GQL_FRAGMENT_USER_LEADERBOARDS } from "@graphql/_fragments/userLeaderboards.gql";
import { GQL_FRAGMENT_USER_PASSIVE_CHALLENGES_EARN_RATE } from "./getUserPassiveChallengesEarnRate.gql";

export const GQL_QUERY_GET_ALL_USER_DATA = gql`
  ${GQL_FRAGMENT_USER_COIN_LEDGER}
  ${GQL_FRAGMENT_USER_TODAY_ACTIVITY}
  ${GQL_FRAGMENT_USER_LEADERBOARDS}
  ${GQL_FRAGMENT_USER_PASSIVE_CHALLENGES_EARN_RATE}
  query GetAllUserData {
    coinLedger: getUserCoinLedger {
      ...UserCoinLedger
    }
    todayActivity: getUserTodayActivity {
      ...UserTodayActivity
    }
    leaderboards: getUserLeaderboards {
      ...Leaderboard
    }
    passiveChallengesEarnRate: getUserPassiveChallengesEarnRate {
      ...UserPassiveChallengesEarnRate
    }
    activeStreak: getUserActiveStreak {
      ...UserActiveStreak
    }
    activeChallenge: getUserActiveChallenge {
      ...UserActiveChallenge
    }
  }
`;

export default function getAllUserData() {
  return client().query<GetAllUserData>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_ALL_USER_DATA,
    variables: {
      intercomHashMethod: Platform.OS as IntercomHashMethod,
    },
  });
}
