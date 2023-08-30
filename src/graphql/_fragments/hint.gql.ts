import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "./shared.gql";

export const GQL_FRAGMENT_HINT = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment Hint on Hint {
    id
    title
    description
    image {
      ...RemoteImage
    }
    screenBlacklist
    screenWhitelist
  }
`;
