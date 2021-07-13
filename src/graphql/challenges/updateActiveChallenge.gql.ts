import gql from "graphql-tag";
import client from "../_core/client";

import { UpdateActiveChallenge, UpdateActiveChallengeVariables } from "../_core/schema";
import { ChallengePayload } from "../_core/schema/globalTypes";

export const GQL_MUTATION_UPDATE_ACTIVE_CHALLENGE = gql`
  mutation UpdateActiveChallenge($levelSlotId: String!, $payload: ChallengePayload) {
    updateActiveChallenge(levelSlotId: $levelSlotId, payload: $payload) {
      challenge {
        level
        levelSlotId
        status
        endDateTime
        incomingData {
          steps
          meditation
          distance
          duration
        }
        milestoneLog {
          data {
            steps
            meditation
            distance
            duration
          }
        }
        yuCoinAwarded
        rating
      }
      levelSlot {
        subtype
        unit
        fitKitTypes
        shouldEndOnLastGoalAchieved
        milestones {
          id
          XP
          coins
          target {
            steps
            meditation
            distance
            duration
          }
        }
      }
      nextLevelAvailableAt
    }
  }
`;

const updateActiveChallengeWithClient = (levelSlotId: string, payload: ChallengePayload) =>
  client().mutate<UpdateActiveChallenge, UpdateActiveChallengeVariables>({
    mutation: GQL_MUTATION_UPDATE_ACTIVE_CHALLENGE,
    variables: { levelSlotId, payload },
    errorPolicy: "ignore",
  });

export default updateActiveChallengeWithClient;
