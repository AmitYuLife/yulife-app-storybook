import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "./remoteImage.gql";

export const GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment VariableRemoteImage on VariableRemoteImage {
    image {
      ...RemoteImage
    }
    width
  }
`;
