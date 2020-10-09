import { GQL_FRAGMENT_USER } from "@graphql/_fragments/user.gql";
import gql from "graphql-tag";
import { Platform } from "react-native";
import client from "../_core/client";
import { GetCurrentUser } from "../_core/schema";
import { IntercomHashMethod } from "../_core/schema/globalTypes";

export const GQL_QUERY_GET_CURRENT_USER = gql`
  ${GQL_FRAGMENT_USER}

  query GetCurrentUser($intercomHashMethod: IntercomHashMethod!) {
    getIntercomHash(method: $intercomHashMethod)
    getCurrentUser {
      ...User
    }
    getDuels {
      id
      opponents {
        userId
        score
        status
        startDateTime
        name {
          firstName
          lastName
        }
      }
      duration
      type
      yucoin
      status
    }
  }
`;

export const GQL_QUERY_GET_CURRENT_USER_LEADERBOARD = gql`
  query GetCurrentUserLeaderboard {
    getCurrentUser {
      leaderboards {
        leaderboardId
        name
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
