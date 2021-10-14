import gql from "graphql-tag";

export const GQL_QUERY_GET_YUMOJI_BUILDER_INITIAL_PARTS = gql`
  query GetYumojiBuilderInitialParts($bodyType: AvatarBodyType!) {
    getYumojiBuilderInitialParts(bodyType: $bodyType) {
      colorSchemeId
      categoryId
      partId
      partType
      order
      remoteUrl {
        uri(options: { width: 560, height: 1106 })
        id
      }
    }
  }
`;
