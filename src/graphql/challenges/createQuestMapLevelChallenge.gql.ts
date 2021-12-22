import { MutationTuple } from "@apollo/react-hooks";
import { CreateActiveChallengeVariables, CreateQuestMapLevelChallenge } from "@graphql/_core/schema";
import gql from "graphql-tag";

export const GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE = gql`
  mutation CreateQuestMapLevelChallenge($levelSlotId: String!) {
    createQuestMapLevelChallenge(levelSlotId: $levelSlotId) {
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
    }
  }
`;
export type CreateQuestMapLevelChallengeMutationTuple = MutationTuple<
  CreateQuestMapLevelChallenge,
  CreateActiveChallengeVariables
>;
