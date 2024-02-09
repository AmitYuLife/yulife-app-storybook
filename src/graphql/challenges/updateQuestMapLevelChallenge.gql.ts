import { gql } from "@apollo/client";
import client from "@graphql/_core/client";

import { ChallengePayload } from "@graphql/_core/schema/globalTypes";
import { UpdateQuestMapLevelChallenge, UpdateQuestMapLevelChallengeVariables } from "@graphql/_core/schema";
import { GQL_QUERY_GET_QUEST_MAP_LEVEL } from "./getQuestMapLevel.gql";
import { GQL_FRAGMENT_YU_HEALTH_OPTIONS } from "@graphql/_fragments/yuHealth.gql";

export const GQL_MUTATION_UPDATE_QUEST_MAP_LEVEL_CHALLENGE = gql`
  ${GQL_FRAGMENT_YU_HEALTH_OPTIONS}

  mutation UpdateQuestMapLevelChallenge($levelSlotId: String!, $contentId: String, $payload: ChallengePayload) {
    updateQuestMapLevelChallenge(levelSlotId: $levelSlotId, contentId: $contentId, payload: $payload) {
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
        yuHealth {
          ...YuHealthOptions
        }
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

interface UpdateQuestMapLevelChallengeArgs {
  levelSlotId: string;
  payload: ChallengePayload;
  level?: number;
  yuniversalMap?: number;
  contentId?: string;
}

const updateQuestMapLevelChallenge = ({
  levelSlotId,
  payload,
  level,
  yuniversalMap,
  contentId,
}: UpdateQuestMapLevelChallengeArgs) =>
  client().mutate<UpdateQuestMapLevelChallenge, UpdateQuestMapLevelChallengeVariables>({
    mutation: GQL_MUTATION_UPDATE_QUEST_MAP_LEVEL_CHALLENGE,
    variables: { levelSlotId, payload, contentId },
    errorPolicy: "ignore",
    ...(!level
      ? {}
      : {
          refetchQueries: [
            { query: GQL_QUERY_GET_QUEST_MAP_LEVEL, variables: { level, yuniversalMap: yuniversalMap || null } },
          ],
        }),
  });

export default updateQuestMapLevelChallenge;
