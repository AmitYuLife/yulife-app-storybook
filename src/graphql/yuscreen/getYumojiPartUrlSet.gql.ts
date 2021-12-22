import { GQL_FRAGMENT_REMOTE_IMAGE } from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";

export const GQL_QUERY_GET_YUMOJI_PART_URL_SET = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  query GetYumojiPartUrlSet($partType: AvatarPartType) {
    getYumojiPartUrlSet(partType: $partType) {
      variants {
        coverType
        worlds {
          worldId
          remoteUrl {
            ...RemoteImage
          }
          title {
            label
            color
          }
        }
      }
    }
  }
`;
