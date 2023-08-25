import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_BOX_OPTION_CARD = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment ContentItemBoxOptionCard on ContentItemBoxOptionCard {
    id
    contentItemBoxOptionCardTitle: title
    contentItemBoxOptionCardDescription: description
    contentItemBoxOptionCardDescriptionTextType: descriptionTextType
    image {
      ...RemoteImage
    }
    onPress {
      ...SduiAction
    }
    styles {
      ...SduiStyle
    }
    innerHeight
    subtitle
    subtitleTextType
    titleWrapperStyles {
      ...SduiStyle
    }
    subtitleWrapperStyles {
      ...SduiStyle
    }
    descriptionNumberOfLines
    titleNumberOfLines
  }
`;
