import gql from "graphql-tag";
import client from "../_core/client";
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

const upsertOnboardingChallenge = () =>
    client().mutate<UpsertOnboardingChallenge>({ mutation: upsertOnboardingChallengeGql });

export default upsertOnboardingChallenge;
