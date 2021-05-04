import gql from "graphql-tag";

export const GQL_QUERY_GET_WELLBEING_HUB_DETAILS = gql`
  query GetWellbeingHubItem($id: ID!, $os: OS) {
    wellbeingHubItem(id: $id, os: $os) {
      id
      title
      description
      thumbnail {
        id
        uri
      }
      icon {
        id
        uri
      }
      content {
        ... on ContentItemMarkdown {
          __typename
          id
          title
          markdown
          parsedMarkdown
        }
        ... on ContentItemBox {
          __typename
          id
          title
          markdown
          parsedMarkdown
          canCopy
        }
        ... on ContentItemButton {
          __typename
          id
          label
          uri
          icon {
            id
            uri
          }
        }
        ... on ContentItemImage {
          __typename
          id
          image {
            id
            uri
          }
        }
      }
    }
  }
`;
