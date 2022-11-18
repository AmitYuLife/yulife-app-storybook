import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM, GQL_FRAGMENT_ABSOLUTE_CONTENT_ITEM } from "@graphql/_fragments/content.gql";
import { GQL_FRAGMENT_SDUI_STYLE } from "@graphql/_fragments/shared.gql";

export const GQL_QUERY_GET_SDUI_STATIC_STEP = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM}
  ${GQL_FRAGMENT_ABSOLUTE_CONTENT_ITEM}
  ${GQL_FRAGMENT_SDUI_STYLE}

  query GetSduiStaticStep($stepId: String!) {
    getSduiStaticStep(stepId: $stepId) {
      stepId
      stepData
      body {
        ...ContentItem
      }
      absolute {
        ...AbsoluteContentItem
      }
      containerStyles {
        ...SduiStyle
      }
    }
  }
`;
