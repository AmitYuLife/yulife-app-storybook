import { gql } from "@apollo/client";
import { GQL_FRAGMENT_USER_TODAY_ACTIVITY } from "@graphql/_fragments/userTodayActivity.gql";
import client from "../_core/client";
import { GetUserTodayActivity } from "../_core/schema";

export const GQL_QUERY_GET_USER_TODAY_ACTIVITY = gql`
  ${GQL_FRAGMENT_USER_TODAY_ACTIVITY}
  query GetUserTodayActivity {
    getUserTodayActivity {
      ...UserTodayActivity
    }
  }
`;

export default function getUserTodayActivity() {
  return client().query<GetUserTodayActivity>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_TODAY_ACTIVITY,
  });
}
