import gql from "graphql-tag";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "@graphql/_fragments/shared.gql";

export const GQL_QUERY_GET_ACTIVE_BUFFS_OVERLAY = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  query GetActiveBuffsOverlay($buffTypes: [BuffArea!]!) {
    getActiveBuffsOverlay(buffTypes: $buffTypes) {
      icon {
        ...RemoteImage
      }
      image {
        ...RemoteImage
      }
      title
      equipment {
        slotUri
        iconUri
        buffs {
          icon {
            ...RemoteImage
          }
          title
          description
        }
      }
    }
  }
`;
