import { GQL_FRAGMENT_CONTENT_ITEM_LOTTIE } from "@graphql/_fragments/content.gql";
import { GQL_FRAGMENT_SDUI_ACTION } from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";

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
