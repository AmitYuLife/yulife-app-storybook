import { gql } from "@apollo/client";

export const GQL_FRAGMENT_REMOTE_IMAGE = gql`
  fragment RemoteImage on RemoteImage {
    id
    uri
  }
`;
