import { gql } from "@apollo/client";

export const GQL_QUERY_GET_WELLBEING_HUB_CATEGORIES = gql`
  query GetWellbeingHubCategories($os: OS) {
    wellbeingHubCategories(os: $os) {
      id
      name
    }
  }
`;
