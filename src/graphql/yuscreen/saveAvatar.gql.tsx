import { MutationTuple } from "@apollo/react-hooks";
import { SaveAvatarVariables, SaveAvatar } from "@graphql/_core/schema";
import gql from "graphql-tag";

export const GQL_MUTATION_SAVE_AVATAR = gql`
  mutation SaveAvatar($avatar: UserAvatarInput) {
    updateUserAvatar(avatar: $avatar){
      rewarded
      rewardAmount
      updated
    }
  }
`;

export type SaveAvatarMutationTuple = MutationTuple<SaveAvatar, SaveAvatarVariables>;
