import { gql } from "@apollo/client";

export const GQL_QUERY_GET_YUMOJI_REMOTE_PARTS = gql`
  fragment YumojiRemotePart on YumojiRemotePart {
    id
    hidesPartTypes
    remoteUrl {
      id
      uri(options: { width: 530, height: 1106 })
    }
  }

  query GetYumojiRemoteParts {
    avatar: getYumojiRemoteParts {
      id
      shadow {
        ...YumojiRemotePart
      }
      head {
        ...YumojiRemotePart
      }
      eyes {
        ...YumojiRemotePart
      }
      hair {
        ...YumojiRemotePart
      }
      body {
        ...YumojiRemotePart
      }
      pants {
        ...YumojiRemotePart
      }
      chest {
        ...YumojiRemotePart
      }
      gloves {
        ...YumojiRemotePart
      }
      facialHair {
        ...YumojiRemotePart
      }
      glasses {
        ...YumojiRemotePart
      }
      boots {
        ...YumojiRemotePart
      }
      headwear {
        ...YumojiRemotePart
      }
    }
  }
`;
