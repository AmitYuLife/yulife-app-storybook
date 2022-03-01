import { GQL_FRAGMENT_CONTENT_ITEM_LOTTIE } from "@graphql/_fragments/content.gql";
import { GQL_FRAGMENT_SDUI_ACTION } from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";
import client from "@graphql/_core/client";
import { GetUserSurge } from "@graphql/_core/schema";

export const GQL_QUERY_GET_USER_SURGE = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_LOTTIE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  query GetUserSurge {
    getUserSurge {
      endDateTime
      multiplier
      title
      description
      lottie {
        ...ContentItemLottie
      }
    }
  }
`;

export default function getUserSurge() {
  return client().query<GetUserSurge>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_SURGE,
    variables: {},
  });
}
