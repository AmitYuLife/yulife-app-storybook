import { gql } from "@apollo/client";

export const GQL_FRAGMENT_SDUI_STYLE_DYNAMIC = gql`
  fragment SduiStyleDynamic on SduiStyleDynamic {
    property
    value
    defaultValue
  }
`;
