import { gql } from "@apollo/client";

export const GQL_FRAGMENT_PRODUCT_ACTION = gql`
  fragment ProductAction on ProductAction {
    productId
    nextRouteId
    nextModalId
    shouldBeNormalised
  }
`;
