import { gql } from "@apollo/client";

export const GQL_QUERY_GET_YUMOJI_BUILDER_CATEGORY_LIST = gql`
  query GetYumojiBuilderCategoryList {
    getYumojiBuilderCategoryList {
      id
      icon {
        id
        uri(options: { width: 80, height: 80, format: png })
      }
      selectedIcon {
        id
        uri(options: { width: 80, height: 80, format: png })
      }
      variantsOfPart
      previewZoom
      previewTop
      previewLeft
      matchType
      children {
        id
        icon {
          id
          uri(options: { width: 80, height: 80, format: png })
        }
        selectedIcon {
          id
          uri(options: { width: 80, height: 80, format: png })
        }
        variantsOfPart
        previewZoom
        previewTop
        previewLeft
        matchType
        emptyMessage
      }
    }
  }
`;
