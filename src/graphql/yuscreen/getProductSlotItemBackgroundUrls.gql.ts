import { GQL_FRAGMENT_REMOTE_IMAGE } from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";

export const GQL_QUERY_GET_PRODUCT_SLOT_ITEM_BACKGROUND_URLS = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  query GetProductSlotItemBackgroundUrls {
    getProductSlotItemBackgroundUrls {
      coverType
      image {
        ...RemoteImage
      }
    }
  }
`;
