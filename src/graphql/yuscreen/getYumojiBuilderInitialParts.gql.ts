import gql from "graphql-tag";

export const GQL_QUERY_GET_YUMOJI_BUILDER_INITIAL_PARTS = gql`
  query GetYumojiBuilderInitialParts($bodyType: AvatarBodyType!) {
    getYumojiBuilderInitialParts(bodyType: $bodyType) {
      colorSchemeId
      partId
      partType
      order
      remoteUrl {
        uri
        id
      }
    }
  }
`;
