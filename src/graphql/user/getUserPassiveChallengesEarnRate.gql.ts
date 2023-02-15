import { gql } from "@apollo/client";
import { GetUserPassiveChallengesEarnRate } from "@graphql/_core/schema";
import client from "../_core/client";

export const GQL_FRAGMENT_USER_PASSIVE_CHALLENGES_EARN_RATE = gql`
  fragment UserPassiveChallengesEarnRate on UserPassiveChallengesEarnRate {
    STEPS {
      exchange {
        yucoin
        steps
        meditation
        surge
      }
      levelSlot {
        id
        milestones {
          id
          coins
        }
      }
      isMainSurge
    }
    CYCLING {
      levelSlot {
        id
        subtype
        unit
        milestones {
          id
          XP
          coins
          target {
            steps
            meditation
            distance
          }
        }
      }
      isMainSurge
    }
    MEDITATION {
      exchange {
        yucoin
        steps
        meditation
        surge
      }
      levelSlot {
        id
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
      isMainSurge
    }
  }
`;
export const GQL_QUERY_GET_USER_PASSIVE_CHALLENGES_EARN_RATE = gql`
  ${GQL_FRAGMENT_USER_PASSIVE_CHALLENGES_EARN_RATE}

  query GetUserPassiveChallengesEarnRate {
    getUserPassiveChallengesEarnRate {
      ...UserPassiveChallengesEarnRate
    }
  }
`;

export default function getUserPassiveChallengesEarnRate() {
  return client().query<GetUserPassiveChallengesEarnRate>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_PASSIVE_CHALLENGES_EARN_RATE,
    variables: {},
  });
}
