import gql from "graphql-tag";
import client from "../_core/client";

import { ChallengePayload, UpdateActiveChallenge, UpdateActiveChallengeVariables } from "../_core/schema";

export const updateActiveChallengeGql = gql`
    mutation UpdateActiveChallenge($levelSlotId: String!, $payload: ChallengePayload) {
        updateActiveChallenge(levelSlotId: $levelSlotId, payload: $payload) {
            challenge {
                levelSlotId
                status
                endDateTime
                incomingData {
                    steps
                    meditation
                }
                milestoneLog {
                    data {
                        steps
                        meditation
                    }
                }
                yuCoinAwarded
                rating
            }
            levelSlot {
                subtype
                unit
                milestones {
                    id
                    XP
                    coins
                    target {
                        steps
                        meditation
                    }
                }
            }
            nextLevelAvailableAt
        }
    }
`;

const updateActiveChallengeWithClient = (levelSlotId: string, payload: ChallengePayload) =>
    client.mutate<UpdateActiveChallenge, UpdateActiveChallengeVariables>({
        mutation: updateActiveChallengeGql,
        variables: { levelSlotId, payload }
    });

export default updateActiveChallengeWithClient;
