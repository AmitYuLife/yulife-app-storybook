import { gql } from "@apollo/client";
import { GQL_FRAGMENT_YU_HEALTH_OPTIONS } from "./yuHealth.gql";

export const GQL_FRAGMENT_USER_ACTIVE_CHALLENGE = gql`
  ${GQL_FRAGMENT_YU_HEALTH_OPTIONS}

  fragment UserActiveChallenge on ActiveChallenge {
    challenge {
      id
      level
      levelSlotId
      status
      endDateTime
      startDateTime
      createdBySource
      rating
      subtype
      yuCoinAwarded
      incomingData {
        steps
        meditation
        distance
        duration
        calories
      }
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
  }
`;
