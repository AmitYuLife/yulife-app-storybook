import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { GetCurrentLevel } from "../_core/schema";

export const getCurrentLevel = gql`
    query GetCurrentLevel {
        getCurrentLevel {
            id
            __typename
            level
            levelChestId
            name
            rating
            slots {
                id
                __typename
                availableAtLevel
                timeLimit
                passive
                type
                subtype
                unit
                rating
                yuCoinAwarded
                milestones {
                    id
                    __typename
                    XP
                    coins
                    target {
                        __typename
                        steps
                        meditation
                    }
                }
            }
        }
    }
`;

export type GetCurrentLevelResultType = QueryResult<GetCurrentLevel>;

export default class GetCurrentLevelQuery extends Query<GetCurrentLevel> {}
