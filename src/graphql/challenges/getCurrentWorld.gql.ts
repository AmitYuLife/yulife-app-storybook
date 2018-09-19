import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { GetCurrentWorld } from "../_core/schema";

export const getCurrentWorldGql = gql`
    query GetCurrentWorld {
        getCurrentWorld {
            id
            __typename
            level
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

export type GetCurrentWorldResultType = QueryResult<GetCurrentWorld>;

export default class GetCurrentWorldQuery extends Query<GetCurrentWorld> {}
