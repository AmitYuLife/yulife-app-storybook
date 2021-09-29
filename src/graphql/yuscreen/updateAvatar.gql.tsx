import { MutationTuple } from "@apollo/react-hooks";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "../_fragments/avatarRemoteFiles.gql";
import { UpdateAvatarVariables, UpdateAvatar } from "@graphql/_core/schema";
import gql from "graphql-tag";

export const GQL_MUTATION_UPDATE_AVATAR = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}

  mutation UpdateAvatar($avatar: [UserAvatarPartUpdate]) {
    updateUserAvatarParts(avatar: $avatar) {
      rewarded
      rewardAmount
      updated
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
    }
  }
`;

export type UpdateAvatarMutationTuple = MutationTuple<UpdateAvatar, UpdateAvatarVariables>;
