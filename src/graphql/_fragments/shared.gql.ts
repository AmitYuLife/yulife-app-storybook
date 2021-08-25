import gql from "graphql-tag";

export const GQL_FRAGMENT_REMOTE_IMAGE = gql`
  fragment RemoteImage on RemoteImage {
    id
    uri
  }
`;
