import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { Platform } from "react-native";
import client from "../_core/client";
import { GetCurrentUser, IntercomHashMethod } from "../_core/schema";

export const getCurrentUserGql = gql`
    query GetCurrentUser($intercomHashMethod: IntercomHashMethod!) {
        getIntercomHash(method: $intercomHashMethod)
        getCurrentUser {
            __typename
            id
            archived
            onboardingDate
            membershipType
            challengesDoneToday
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
            }
        }
    }
`;

export type GetCurrentUserResultType = QueryResult<GetCurrentUser>;

export class GetCurrentUserQuery extends Query<GetCurrentUser> {}

export default function getCurrentUserWithClient() {
    return client.query<GetCurrentUser>({
        fetchPolicy: "network-only",
        query: getCurrentUserGql,
        variables: {
            intercomHashMethod: Platform.OS as IntercomHashMethod
        }
    });
}
