import { gql } from "@apollo/client";

export const GQL_QUERY_GET_WELLBEING_HUB_ITEMS = gql`
  query GetWellbeingHubItems($os: OS, $width: Float, $height: Float, $categories: [String]) {
    wellbeingHubItems(os: $os, categories: $categories) {
      id
      sduiStepId
      thumbnail {
        id
        uri(options: { width: $width, height: $height, crop: "fit", format: png })
      }
      icon {
        id
        uri
      }
      title
      description
      route
    }
  }
`;
