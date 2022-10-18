import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PROCESSING_TIMER = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemProcessingTimer on ContentItemProcessingTimer {
    id
    secondsUntilTarget
    backgroundUrl
    contentItemProcessingTimerHeading: heading
    onClose {
      ...SduiAction
    }
  }
`;
