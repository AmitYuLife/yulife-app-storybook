import {
  MarkMobileNotificationsAsViewedByType,
  MarkMobileNotificationsAsViewedByTypeVariables,
} from "@graphql/_core/schema";
import { gql } from "@apollo/client";
import client from "../_core/client";

export const GQL_MUTATION_MARK_MOBILE_NOTIFICATIONS_AS_VIEWED = gql`
  mutation MarkMobileNotificationsAsViewedByType($type: String) {
    markMobileNotificationsAsViewedByType(type: $type)
  }
`;

export const markNotificationsAsViewedByType = (variables: MarkMobileNotificationsAsViewedByTypeVariables) => {
  return client().mutate<MarkMobileNotificationsAsViewedByType, MarkMobileNotificationsAsViewedByTypeVariables>({
    errorPolicy: "ignore",
    mutation: GQL_MUTATION_MARK_MOBILE_NOTIFICATIONS_AS_VIEWED,
    variables,
  });
};
