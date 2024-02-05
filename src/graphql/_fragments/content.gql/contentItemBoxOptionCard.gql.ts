import { gql } from "@apollo/client";
import {
  GQL_FRAGMENT_REMOTE_IMAGE,
  GQL_FRAGMENT_SDUI_ACTION,
  GQL_FRAGMENT_SDUI_STYLE,
  GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE,
} from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_BOX_OPTION_CARD = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE}

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
    event {
      ...SduiAction
    }
    styles {
      ...SduiStyle
    }
    innerHeight
    subtitle
    subtitleTextType
    titleStyles {
      ...SduiStyle
    }
    titleWrapperStyles {
      ...SduiStyle
    }
    subtitleWrapperStyles {
      ...SduiStyle
    }
    innerWrapperStyles {
      ...SduiStyle
    }
    contentInnerWrapperStyles {
      ...SduiStyle
    }
    descriptionNumberOfLines
    titleNumberOfLines
    variableImage {
      ...VariableRemoteImage
    }
  }
`;
