import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_LOTTIE } from "./contentItemLottie.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_MEDIA = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_CONTENT_ITEM_LOTTIE}

  fragment ContentItemMedia on ContentItemMedia {
    id
    mediaTitle
    description
    shortDescription
    theme
    orientation
    duration
    yuCoin
    stars
    sourceType
    eventType
    startErrorMessage
    startChallengeButtonLabel
    showTimer
    source {
      id
      uri
    }
    mediaLogo {
      ...RemoteImage
    }
    poster {
      ...RemoteImage
    }
    videoLogo {
      ...RemoteImage
    }
    thumbnail {
      ...RemoteImage
    }
    lottie {
      ...ContentItemLottie
    }
    onLeftIconPress {
      ...SduiAction
    }
    onRightIconPress {
      ...SduiAction
    }
    onStart {
      ...SduiAction
    }
    onEnd {
      ...SduiAction
    }
  }
`;
