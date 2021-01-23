import gql from "graphql-tag";

export const GQL_FRAGMENT_YU_PRODUCT_OPTION_POWERS = gql`
  fragment ProductPowers on YuProductOptionPowers {
    id
    title
    description
    icon
  }
`;

export const GQL_FRAGMENT_YU_PRODUCT_OPTION_STYLES = gql`
  fragment ProductOptionStyle on YuProductOptionStyle {
    world
    name
    icon
    background
    armor
  }
`;

export const GQL_FRAGMENT_YU_PRODUCT_OPTIONS = gql`
  ${GQL_FRAGMENT_YU_PRODUCT_OPTION_STYLES}
  ${GQL_FRAGMENT_YU_PRODUCT_OPTION_POWERS}
  fragment ProductOptions on YuProductOption {
    type
    earnRate
    heading
    percentageCovered
    styles {
      ...ProductOptionStyle
    }
    powers {
      ...ProductPowers
    }
  }
`;

export const GQL_FRAGMENT_YU_PRODUCT = gql`
  ${GQL_FRAGMENT_YU_PRODUCT_OPTIONS}
  fragment PersonalProduct on YuProduct {
    productId
    productType
    status
    name
    code
    itemSlot
    earnRate
    description
    policyNumber
    coverType
    options {
      ...ProductOptions
    }
  }
`;
