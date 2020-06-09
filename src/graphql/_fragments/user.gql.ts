import gql from "graphql-tag";

export const GQL_FRAGMENT_USER = gql`
  fragment User on User {
    __typename
    id
    archived
    firstName
    lastName
    createdAt
    onboardingDate
    redeemedOnboarding
    businessAccountId
    business {
      businessAccountName
      alpha
      isGroup
      isWellbeingAccess
    }
    wootricId
    membershipType
    challengesDoneToday
    connections {
      name
      isConnected
      lastUpdated
    }
    userFeatures {
      name
      value
    }
    mobileConsent {
      mobileHealth
      marketing
      pushNotifications
      companyLeaderboard
      workspaceLeaderboard
    }
    redeemedOnboarding
    coinLedger {
      currentBalance
      currentLevel
      nextLevelAvailableAt
    }
    passiveSteps: passiveChallenge {
      exchange {
        yucoin
        steps
        meditation
        surge
      }
      isMainSurge
    }
    passiveMeditation: passiveChallenge(id: MEDITATION) {
      exchange {
        yucoin
        steps
        meditation
        surge
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
      isMainSurge
    }
    activeChallenge {
      challenge {
        level
        levelSlotId
        status
        endDateTime
        startDateTime
        rating
        subtype
        incomingData {
          steps
          meditation
          distance
        }
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
            distance
          }
        }
      }
    }
    activeStreak {
      id
      type
      value
      maxStreak
      streakAwardId
      streak
      nextStreakAvailableAt
    }
    todayActivity {
      id
      earned
      milestones
      name
      score
    }
    leaderboards {
      leaderboardId
      name
      consent
      hasAccepted
      inviteFrom
    }
  }
`;
