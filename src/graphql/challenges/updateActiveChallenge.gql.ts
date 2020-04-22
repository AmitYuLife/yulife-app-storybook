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
  client().mutate<UpdateActiveChallenge, UpdateActiveChallengeVariables>({
    mutation: GQL_MUTATION_UPDATE_ACTIVE_CHALLENGE,
    variables: { levelSlotId, payload },
    errorPolicy: "ignore",
  });

export default updateActiveChallengeWithClient;
