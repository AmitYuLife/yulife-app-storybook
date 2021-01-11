import gql from "graphql-tag";
import client from "../_core/client";
import { UpdateUserNotificationsSettings, UpdateUserNotificationsSettingsVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_UPDATE_USER_NOTIFICATIONS_SETTINGS = gql`
  mutation UpdateUserNotificationsSettings($type: UserNotificationsType!, $isActive: Boolean!, $time: String) {
    updateUserNotificationsSettings(type: $type, isActive: $isActive, time: $time)
  }
`;

export default (variables: UpdateUserNotificationsSettingsVariables) =>
  client().mutate<UpdateUserNotificationsSettings>({
    mutation: GQL_MUTATION_UPDATE_USER_NOTIFICATIONS_SETTINGS,
    variables,
  });
