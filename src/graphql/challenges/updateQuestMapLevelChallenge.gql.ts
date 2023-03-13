import { gql } from "@apollo/client";
import client from "@graphql/_core/client";

import { ChallengePayload } from "@graphql/_core/schema/globalTypes";
import { UpdateQuestMapLevelChallenge, UpdateQuestMapLevelChallengeVariables } from "@graphql/_core/schema";
import { GQL_QUERY_GET_QUEST_MAP_LEVEL } from "./getQuestMapLevel.gql";

export const GQL_MUTATION_UPDATE_QUEST_MAP_LEVEL_CHALLENGE = gql`
  mutation UpdateQuestMapLevelChallenge($levelSlotId: String!, $payload: ChallengePayload) {
    updateQuestMapLevelChallenge(levelSlotId: $levelSlotId, payload: $payload) {
      challenge {
        level
        levelSlotId
        status
        endDateTime
        createdAt
        incomingData {
          steps
          meditation
          distance
          duration
          calories
        }
        milestoneLog {
          data {
            steps
            meditation
            distance
            duration
            calories
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
            calories
          }
        }
      }
      nextLevelAvailableAt
    }
  }
`;

const updateQuestMapLevelChallenge = (
  levelSlotId: string,
  payload: ChallengePayload,
  level: number,
  yuniversalMap: number
) =>
  client().mutate<UpdateQuestMapLevelChallenge, UpdateQuestMapLevelChallengeVariables>({
    mutation: GQL_MUTATION_UPDATE_QUEST_MAP_LEVEL_CHALLENGE,
    variables: { levelSlotId, payload },
    errorPolicy: "ignore",
    refetchQueries: [{ query: GQL_QUERY_GET_QUEST_MAP_LEVEL, variables: { level, yuniversalMap } }],
  });

export default updateQuestMapLevelChallenge;
