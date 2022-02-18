import gql from "graphql-tag";
import client from "@graphql/_core/client";

import { ChallengePayload } from "@graphql/_core/schema/globalTypes";
import { UpdateQuestMapLevelChallenge, UpdateQuestMapLevelChallengeVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_UPDATE_QUEST_MAP_LEVEL_CHALLENGE = gql`
  mutation UpdateQuestMapLevelChallenge($levelSlotId: String!, $payload: ChallengePayload) {
    updateQuestMapLevelChallenge(levelSlotId: $levelSlotId, payload: $payload) {
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

const updateQuestMapLevelChallenge = (levelSlotId: string, payload: ChallengePayload) =>
  client().mutate<UpdateQuestMapLevelChallenge, UpdateQuestMapLevelChallengeVariables>({
    mutation: GQL_MUTATION_UPDATE_QUEST_MAP_LEVEL_CHALLENGE,
    variables: { levelSlotId, payload },
    errorPolicy: "ignore",
  });

export default updateQuestMapLevelChallenge;
