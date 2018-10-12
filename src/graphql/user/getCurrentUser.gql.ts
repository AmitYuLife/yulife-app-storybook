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
                currentStreak
                nextLevelAvailableAt
                nextStreakAvailableAt
            }
            activeChallenge {
                challenge {
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
            }
            challengesToday {
                yuCoinAwarded
                rating
                subtype
                incomingData {
                    steps
                    meditation
                }
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

export class GetCurrentUserQuery extends Query<GetCurrentUser> { }

const getCurrentUserWithClient = () =>
    client.query<GetCurrentUser>({
        fetchPolicy: "network-only",
        query: getCurrentUserGql,
        variables: {
            intercomHashMethod: Platform.OS as IntercomHashMethod
        }
    });

export default getCurrentUserWithClient;
