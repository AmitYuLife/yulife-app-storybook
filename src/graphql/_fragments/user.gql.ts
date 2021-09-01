import gql from "graphql-tag";

export const GQL_FRAGMENT_USER = gql`
  fragment User on User {
    __typename
    id
    archived
    firstName
    lastName
    dateOfBirth
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
      levelSlot {
        milestones {
          id
          coins
        }
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
    # Contact Details
    phone
    addressFirstLine
    addressSecondLine
    addressCity
    addressPostCode
  }
`;
