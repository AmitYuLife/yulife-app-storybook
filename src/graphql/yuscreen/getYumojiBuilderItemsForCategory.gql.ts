import gql from "graphql-tag";

export const GQL_QUERY_GET_YUMOJI_BUILDER_ITEMS_FOR_CATEGORY = gql`
  query GetYumojiBuilderItemsForCategory($categoryId: String!, $bodyType: AvatarBodyType!, $partId: String) {
    getYumojiBuilderItemsForCategory(categoryId: $categoryId, bodyType: $bodyType, partId: $partId) {
      title
      items {
        parts {
          partId
          partType
          order
          colorSchemeId
          remoteUrl {
            id
            uri
          }
        }
        representativeColor
        preview {
          image {
            id
            uri
          }
          transform {
            left
            top
            zoom
            height
            width
          }
        }
        status
        statusIcon
        bottomText
      }
    }
  }
`;
