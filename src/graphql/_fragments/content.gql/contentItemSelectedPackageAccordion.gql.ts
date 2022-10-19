import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_ACCORDION = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemSelectedPackageAccordion on ContentItemSelectedPackageAccordion {
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
    coverOptions {
      coverType
      subheading
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
    }
  }
`;
