import gql from "graphql-tag";

export const GQL_FRAGMENT_REMOTE_IMAGE = gql`
  fragment RemoteImage on RemoteImage {
    id
    uri
  }
`;

export const GQL_FRAGMENT_SDUI_STYLE = gql`
  fragment SduiStyle on SduiStyle {
    property
    value
  }
`;

export const GQL_FRAGMENT_SDUI_ACTION = gql`
  fragment SduiAction on SduiAction {
    type
    payload
  }
`;
