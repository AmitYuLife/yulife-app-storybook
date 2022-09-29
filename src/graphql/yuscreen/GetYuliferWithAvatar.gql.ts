import { gql } from "@apollo/client";
import { GQL_FRAGMENT_AVATAR } from "./_fragments.gql";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "../_fragments/avatarRemoteFiles.gql";
import { GetYuliferWithAvatar_getYulifer } from "@graphql/_core/schema";

export interface GetYuliferWithAvatarData {
  getYulifer: GetYuliferWithAvatar_getYulifer;
}

export const GQL_QUERY_GET_YULIFER_WITH_AVATAR = gql`
  ${GQL_FRAGMENT_AVATAR}
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}

  query GetYuliferWithAvatar {
    getYulifer {
      userId
      earnRate
      isAvatarCreated
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
      avatar {
        ...YuAvatar
      }
    }
  }
`;
