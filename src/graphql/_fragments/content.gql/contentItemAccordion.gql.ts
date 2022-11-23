import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_ACCORDION = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemAccordion on ContentItemAccordion {
    id
    heading
    headerIcon {
      ...RemoteImage
    }
    infoIcon {
      ...RemoteImage
    }
    styles {
      ...SduiStyle
    }
    items {
      leftText
      rightTextBody
      rightTextLabel
      info {
        onPress {
          ...SduiAction
        }
      }
    }
    subheading
  }
`;
