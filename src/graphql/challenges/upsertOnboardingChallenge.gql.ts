import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult, MutationState } from "react-apollo";
import { UpsertOnboardingChallenge } from "../_core/schema";

export const upsertOnboardingChallengeGql = gql`
    mutation UpsertOnboardingChallenge {
        upsertPassiveChallenge(type: ONBOARDING) {
            challenge {
                yuCoinAwarded
            }
        }
    }
`;

export type UpsertOnboardingChallengeStateType = MutationState<UpsertOnboardingChallenge>;

export type UpsertOnboardingChallengeMutationType = MutationFn<UpsertOnboardingChallenge>;

export type UpsertOnboardingChallengeResultType = MutationResult<UpsertOnboardingChallenge>;

export default class UpsertOnboardingChallengeMutation extends Mutation<UpsertOnboardingChallenge> {}
