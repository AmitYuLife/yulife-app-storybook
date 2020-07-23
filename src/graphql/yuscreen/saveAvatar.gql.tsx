import { MutationTuple } from "@apollo/react-hooks";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "../_fragments/avatarRemoteFiles.gql";
import { SaveAvatarVariables, SaveAvatar } from "@graphql/_core/schema";
import gql from "graphql-tag";

export const GQL_MUTATION_SAVE_AVATAR = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}

  mutation SaveAvatar($avatar: UserAvatarInput) {
    updateUserAvatar(avatar: $avatar) {
      rewarded
      rewardAmount
      updated
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
    }
  }
`;

// TODO: move remote files to fragment

export type SaveAvatarMutationTuple = MutationTuple<SaveAvatar, SaveAvatarVariables>;
