import { MutationTuple } from "@apollo/client";
import { CreateQuestMapLevelChallengeVariables, CreateQuestMapLevelChallenge } from "@graphql/_core/schema";
import { gql } from "@apollo/client";

export const GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE = gql`
  mutation CreateQuestMapLevelChallenge($levelSlotId: String!, $contentId: String) {
    createQuestMapLevelChallenge(levelSlotId: $levelSlotId, contentId: $contentId) {
      challenge {
        level
        levelSlotId
        status
        startDateTime
        endDateTime
      }
      levelSlot {
        subtype
        unit
        shouldEndOnLastGoalAchieved
        fitKitTypes
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
      chest {
        type
        value
      }
      yuniversalChest {
        chestType
        title
        items {
          icon {
            id
            uri(options: { width: 180, height: 180 })
          }
          description
          backgroundColour
          shadowColour
          textColour
          starColour
          tooltip {
            title
            description
            cta
          }
        }
      }
    }
  }
`;
export type CreateQuestMapLevelChallengeMutationTuple = MutationTuple<
  CreateQuestMapLevelChallenge,
  CreateQuestMapLevelChallengeVariables
>;
