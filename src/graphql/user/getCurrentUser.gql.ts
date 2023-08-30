import { GQL_FRAGMENT_USER } from "@graphql/_fragments/user.gql";
import { gql } from "@apollo/client";
import { Platform } from "react-native";
import client from "../_core/client";
import { GetCurrentUser } from "../_core/schema";
import { IntercomHashMethod } from "../_core/schema/globalTypes";
import { GQL_FRAGMENT_DAILY_PENSION_CONTRIBUTION } from "@graphql/_fragments/dailyPensionContribution.gql";
import { GQL_FRAGMENT_HINT } from "@graphql/_fragments/hint.gql";

export const GQL_QUERY_GET_CURRENT_USER = gql`
  ${GQL_FRAGMENT_USER}
  ${GQL_FRAGMENT_HINT}
  ${GQL_FRAGMENT_DAILY_PENSION_CONTRIBUTION}

  query GetCurrentUser($intercomHashMethod: IntercomHashMethod!) {
    getDailyPensionContribution {
      ...DailyPensionContribution
    }
    getMobileHints {
      ...Hint
    }
    getIntercomHash(method: $intercomHashMethod)
    getCurrentUser {
      ...User
    }
  }
`;

export const GQL_QUERY_GET_CURRENT_USER_LEADERBOARD = gql`
  query GetCurrentUserLeaderboard {
    getCurrentUser {
      leaderboards {
        leaderboardId
        name
        metric
        days
        consent
        hasAccepted
        inviteFrom
      }
    }
  }
`;

export default function getCurrentUserWithClient() {
  return client().query<GetCurrentUser>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_CURRENT_USER,
    variables: {
      intercomHashMethod: Platform.OS as IntercomHashMethod,
    },
  });
}
