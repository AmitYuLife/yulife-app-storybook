import { MutationTuple } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { CreateActiveChallenge, CreateActiveChallengeVariables } from "../_core/schema";

export const GQL_MUTATION_CREATE_ACTIVE_CHALLENGE = gql`
  mutation CreateActiveChallenge($levelSlotId: String!) {
    createActiveChallenge(levelSlotId: $levelSlotId) {
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

export type CreateActiveChallengeMutationTuple = MutationTuple<CreateActiveChallenge, CreateActiveChallengeVariables>;
