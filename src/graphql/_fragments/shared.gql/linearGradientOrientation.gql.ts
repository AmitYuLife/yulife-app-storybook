import { gql } from "@apollo/client";

export const GQL_FRAGMENT_LINEAR_GRADIENT_ORIENTATION = gql`
  fragment LinearGradientOrientation on LinearGradientOrientation {
    x
    y
  }
`;
