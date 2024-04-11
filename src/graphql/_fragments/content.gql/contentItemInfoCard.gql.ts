import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemInfoCard on ContentItemInfoCard {
    id
    image {
      ...RemoteImage
    }
    variableImage {
      ...VariableRemoteImage
    }
    wrapperStyles {
      ...SduiStyle
    }
    markdown
    styles {
      ...SduiStyle
    }
    hyperlink {
      title
      url
    }
  }
`;
