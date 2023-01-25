import { gql } from "@apollo/client";

export const GQL_FRAGMENT_USER_ACTIVE_CHALLENGE = gql`
  fragment UserActiveChallenge on ActiveChallenge {
    challenge {
      id
      level
      levelSlotId
      status
      endDateTime
      startDateTime
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
