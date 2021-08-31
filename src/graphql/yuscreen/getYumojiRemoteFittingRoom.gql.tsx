import gql from "graphql-tag";

export const GQL_QUERY_GET_YUMOJI_REMOTE_FITTING_ROOM = gql`
  query GetYumojiRemoteFittingRoom($customerProductId: String!, $coverType: CoverType!) {
    getYumojiRemoteFittingRoom(customerProductId: $customerProductId, coverType: $coverType) {
      id
      selectedYuWorld
      popover {
        id
        title
        message
      }
      yuWorlds {
        id
        title
        mainColor
        secondaryColor
        yumojiParts {
          id
          partType
          remoteUrl {
            id
            uri
          }
        }
      }
    }
  }
`;
