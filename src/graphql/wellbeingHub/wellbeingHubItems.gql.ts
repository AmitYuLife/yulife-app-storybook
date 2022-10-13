import { gql } from "@apollo/client";

export const GQL_QUERY_GET_WELLBEING_HUB_ITEMS = gql`
  query GetWellbeingHubItems($os: OS, $width: Float, $height: Float) {
    wellbeingHubItems(os: $os) {
      id
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
