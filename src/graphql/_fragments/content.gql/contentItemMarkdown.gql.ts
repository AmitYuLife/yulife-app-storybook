import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemMarkdown on ContentItemMarkdown {
    id
    title
    markdown
    perkId
    parsedMarkdown
    markdownStyles
    styles {
      ...SduiStyle
    }
    markdownContainerStyle {
      ...SduiStyle
    }
  }
`;
