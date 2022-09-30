import { GQL_FRAGMENT_REMOTE_IMAGE } from "@graphql/_fragments/shared.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_YUMOJI_PART_URL_SET_SWIPER = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  query GetYumojiPartUrlSetSwiper($partType: AvatarPartType) {
    getYumojiPartUrlSetSwiper(partType: $partType) {
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
