import { gql } from "@apollo/client";

export const GQL_FRAGMENT_USER_FEATURES = gql`
  fragment UserFeature on UserFeature {
    name
    value
  }
`;
