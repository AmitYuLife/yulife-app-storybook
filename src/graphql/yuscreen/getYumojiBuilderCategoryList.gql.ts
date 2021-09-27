import gql from "graphql-tag";

export const GQL_QUERY_GET_YUMOJI_BUILDER_CATEGORY_LIST = gql`
  query GetYumojiBuilderCategoryList {
    getYumojiBuilderCategoryList {
      id
      icon {
        id
        uri
      }
      selectedIcon {
        id
        uri
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
          uri
        }
        selectedIcon {
          id
          uri
        }
        variantsOfPart
        previewZoom
        previewTop
        previewLeft
        matchType
      }
    }
  }
`;
