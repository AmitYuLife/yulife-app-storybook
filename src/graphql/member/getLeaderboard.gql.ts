import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { GetLeaderboard, GetLeaderboardVariables } from "../_core/schema";

export const getLeaderboardGql = gql`
    query GetLeaderboard($sortBy: String $leaderboardId: String) {
        getLeaderboard(sortBy: $sortBy leaderboardId: $leaderboardId) {
            __typename
            id
            firstName
            lastName
            name
            coins
            steps
        }
        getCurrentUser {
            __typename
            id
        }
    }
`;

export type GetLeaderboardResultType = QueryResult<GetLeaderboard, GetLeaderboardVariables>;

export default class GetLeaderboardQuery extends Query<GetLeaderboard, GetLeaderboardVariables> {}
