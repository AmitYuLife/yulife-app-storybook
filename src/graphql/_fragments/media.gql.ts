import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_LOTTIE } from "./content.gql";
import { GQL_FRAGMENT_SDUI_ACTION } from "./shared.gql";

export const GQL_FRAGMENT_MEDIA = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_LOTTIE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  fragment Media on Media {
    id
    title
    description
    shortDescription
    duration
    theme
    media {
      id
      uri
    }
    cover {
      id
      uri
    }
    thumbnail {
      id
      uri
    }
    logo {
      id
      uri
    }
    videoLogo {
      id
      uri
    }
    lottie {
      ...ContentItemLottie
    }
  }
`;
