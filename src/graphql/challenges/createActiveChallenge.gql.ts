import gql from "graphql-tag";
import client from "../_core/client";

import { CreateActiveChallenge, CreateActiveChallengeVariables } from "../_core/schema";

export const createActiveChallengeGql = gql`
    mutation CreateActiveChallenge($levelSlotId: String!) {
        createActiveChallenge(levelSlotId: $levelSlotId) {
            challenge {
                levelSlotId
                status
                startDateTime
                endDateTime
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
            chest {
                type
                value
            }
        }
    }
`;

export default (levelSlotId: string) =>
    client.mutate<CreateActiveChallenge, CreateActiveChallengeVariables>({
        mutation: createActiveChallengeGql,
        variables: { levelSlotId }
    });
