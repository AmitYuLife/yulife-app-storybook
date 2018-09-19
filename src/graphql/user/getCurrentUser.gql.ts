import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import client from "../_core/client";
import { GetCurrentUser } from "../_core/schema";

export const getCurrentUserGql = gql`
    query GetCurrentUser {
        getCurrentUser {
            __typename
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
            activeChallenge {
                challenge {
                    levelSlotId
                    status
                    endDateTime
                    startDateTime
                    rating
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
        }
    }
`;

export type GetCurrentUserResultType = QueryResult<GetCurrentUser>;

export class GetCurrentUserQuery extends Query<GetCurrentUser> {}

const getCurrentUserWithClient = () =>
    client.query<GetCurrentUser>({ query: getCurrentUserGql, fetchPolicy: "network-only" });

export default getCurrentUserWithClient;
