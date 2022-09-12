import gql from "graphql-tag";

export const GQL_QUERY_GET_YU_SCREEN_PRODUCT_LIST = gql`
  query GetYuScreenProductList {
    getYuScreenProductList {
      heading
      body {
        backgroundColor
        button {
          label
          onPress {
            productAction {
              productId
              nextRouteId
              nextModalId
              shouldBeNormalised
            }
            sduiAction {
              type
              payload
            }
          }
          event {
            type
            payload
          }
        }
        contentContainerStyles {
          property
          value
        }
        descriptionMarkdown
        descriptionMarkdownStyles {
          property
          value
        }
        images {
          image {
            id
            uri
          }
          width
        }
        titleMarkdown
        titleMarkdownStyles {
          property
          value
        }
        variant
      }
    }
  }
`;
