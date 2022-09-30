import { gql } from "@apollo/client";
import client from "../_core/client";
import { GetUserNotificationsSettings } from "../_core/schema";

export const GQL_QUERY_GET_USER_NOTIFICATIONS_SETTINGS = gql`
  query GetUserNotificationsSettings {
    getUserNotificationsSettings {
      id
      type
      name
      isActive
      isAvailable
      alertTimestamp
      order
      description
    }
  }
`;

const getUserNotifications = () =>
  client().query<GetUserNotificationsSettings>({
    fetchPolicy: "cache-first",
    query: GQL_QUERY_GET_USER_NOTIFICATIONS_SETTINGS,
  });

export default getUserNotifications;
