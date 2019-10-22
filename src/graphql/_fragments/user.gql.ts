import gql from "graphql-tag";

export const userFragmentGql = gql`
    fragment User on User {
        __typename
        id
        archived
        createdAt
        onboardingDate
        redeemedOnboarding
        businessAccountId
        business {
            businessAccountName
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
        passiveChallenge {
            exchange {
                yucoin
                steps
            }
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
