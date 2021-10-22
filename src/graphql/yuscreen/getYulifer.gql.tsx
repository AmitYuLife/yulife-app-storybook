import gql from "graphql-tag";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "../_fragments/avatarRemoteFiles.gql";

export const GQL_QUERY_GET_YULIFER = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}

  query GetYulifer {
    user: getYulifer {
      userId
      earnRate
      isAvatarCreated
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
    }
  }
`;
