import gql from "graphql-tag";

export const GQL_QUERY_GET_YUMOJI_BUILDER_ITEMS_FOR_CATEGORY = gql`
  query GetYumojiBuilderItemsForCategory(
    $categoryId: String!
    $bodyType: AvatarBodyType!
    $partId: String
    $colorSchemeId: String
  ) {
    getYumojiBuilderItemsForCategory(
      categoryId: $categoryId
      bodyType: $bodyType
      partId: $partId
      colorSchemeId: $colorSchemeId
    ) {
      title
      items {
        parts {
          partId
          partType
          order
          colorSchemeId
          categoryId
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
        label {
          text
          icon {
            id
            uri(options: { width: 64, height: 64 })
          }
          labelColor
          backgroundColor
          borderColor
        }
        modal {
          title
          message
          cta
          ctaText
        }
      }
    }
  }
`;
