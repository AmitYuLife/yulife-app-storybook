import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN } from "./contentItemMarkdown.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_YUGI_CONFIRM = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemYugiConfirm on ContentItemYugiConfirm {
    id
    yugiHeading
    content {
      ...ContentItemMarkdown
    }
    buttonText
    buttonOnPress {
      ...SduiAction
    }
  }
`;
