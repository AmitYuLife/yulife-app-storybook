import { gql } from "@apollo/client";

export const GQL_QUERY_GET_ADDRESS_BY_POSTCODE = gql`
  query Address($postcode: String!) {
    findUserAddress(postcode: $postcode) {
      addressCity
      addressCountry
      addressFirstLine
      addressSecondLine
      addressThirdLine
      addressPostCode
      addressCounty
    }
  }
`;
