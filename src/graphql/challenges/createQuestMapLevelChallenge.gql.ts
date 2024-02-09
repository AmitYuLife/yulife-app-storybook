import { MutationTuple } from "@apollo/client";
import { CreateQuestMapLevelChallengeVariables, CreateQuestMapLevelChallenge } from "@graphql/_core/schema";
import { gql } from "@apollo/client";
import client from "../_core/client";
import { GQL_FRAGMENT_YU_HEALTH_OPTIONS } from "@graphql/_fragments/yuHealth.gql";

export const GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE = gql`
  ${GQL_FRAGMENT_YU_HEALTH_OPTIONS}

  mutation CreateQuestMapLevelChallenge($levelSlotId: String!, $contentId: String) {
    createQuestMapLevelChallenge(levelSlotId: $levelSlotId, contentId: $contentId) {
      hideExternalLinks
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
        yuHealth {
          ...YuHealthOptions
        }
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

const createQuestMapLevelChallenge = (variables: { levelSlotId: string; contentId?: string }) =>
  client().mutate<CreateQuestMapLevelChallenge, CreateQuestMapLevelChallengeVariables>({
    mutation: GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE,
    variables,
    errorPolicy: "ignore",
  });

export default createQuestMapLevelChallenge;
