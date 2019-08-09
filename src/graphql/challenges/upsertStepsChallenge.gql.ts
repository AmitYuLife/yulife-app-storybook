import gql from "graphql-tag";
import client from "../_core/client";
import { ChallengePayload, UpsertPassiveChallenge, UpsertPassiveChallengeVariables } from "../_core/schema";

export const upsertPassiveChallengeGql = gql`
    mutation UpsertPassiveChallenge($payload: [ChallengePayload]) {
        upsertPassiveChallenge(type: STEPS, payload: $payload) {
            challenge {
                updatedAt
                yuCoinAwarded
                incomingData {
                    steps
                }
            }
            totalCoins
        }
    }
`;

const upsertPassiveChallenge = (payload: ChallengePayload[]) =>
    client().mutate<UpsertPassiveChallenge, UpsertPassiveChallengeVariables>({
        mutation: upsertPassiveChallengeGql,
        variables: { payload },
        errorPolicy: "ignore"
    });

export default upsertPassiveChallenge;
