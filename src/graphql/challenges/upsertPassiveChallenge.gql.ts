import gql from "graphql-tag";
import client from "../_core/client";
import {
    ChallengePayload,
    PassiveChallengeType,
    UpsertPassiveChallenge,
    UpsertPassiveChallengeVariables
} from "../_core/schema";

export const upsertPassiveChallengeGql = gql`
    mutation UpsertPassiveChallenge($payload: [ChallengePayload], $type: PassiveChallengeType!) {
        upsertPassiveChallenge(type: $type, payload: $payload) {
            challenge {
                updatedAt
                yuCoinAwarded
                incomingData {
                    steps
                    meditation
                }
            }
            totalCoins
        }
    }
`;

const upsertPassiveChallenge = (payload: ChallengePayload[], type = PassiveChallengeType.STEPS) =>
    client().mutate<UpsertPassiveChallenge, UpsertPassiveChallengeVariables>({
        mutation: upsertPassiveChallengeGql,
        variables: { payload, type },
        errorPolicy: "ignore"
    });

export default upsertPassiveChallenge;
