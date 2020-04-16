import gql from "graphql-tag";
import client from "../_core/client";
import { UpsertOnboardingChallenge } from "../_core/schema";

export const GQL_MUTATION_UPSERT_ONBOARDING_CHALLENGE = gql`
    mutation UpsertOnboardingChallenge {
        upsertPassiveChallenge(type: ONBOARDING) {
            challenge {
                yuCoinAwarded
            }
        }
    }
`;

const upsertOnboardingChallenge = () =>
    client().mutate<UpsertOnboardingChallenge>({ mutation: GQL_MUTATION_UPSERT_ONBOARDING_CHALLENGE });

export default upsertOnboardingChallenge;
