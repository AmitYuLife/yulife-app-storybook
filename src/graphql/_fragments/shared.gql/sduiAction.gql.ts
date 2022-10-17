import { gql } from "@apollo/client";

export const GQL_FRAGMENT_SDUI_ACTION = gql`
  fragment SduiAction on SduiAction {
    type
    payload
  }
`;
