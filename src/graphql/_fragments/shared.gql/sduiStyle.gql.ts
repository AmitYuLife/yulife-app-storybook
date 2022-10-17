import { gql } from "@apollo/client";

export const GQL_FRAGMENT_SDUI_STYLE = gql`
  fragment SduiStyle on SduiStyle {
    property
    value
  }
`;
