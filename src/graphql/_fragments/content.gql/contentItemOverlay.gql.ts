import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_BUTTON } from "./contentItemButton.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_OVERLAY = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}

  fragment ContentItemOverlay on ContentItemOverlay {
    id
    markdown
    buttons {
      ...ContentItemButton
    }
  }
`;
