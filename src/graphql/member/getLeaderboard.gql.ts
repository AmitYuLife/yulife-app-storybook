import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { GetLeaderboard, GetLeaderboardVariables } from "../_core/schema";

export const getLeaderboardGql = gql`
    query GetLeaderboard($sortBy: String) {
        getLeaderboard(sortBy: $sortBy) {
            id
            firstName
            lastName
            name
            coins
            steps
        }
    }
`;

export type GetLeaderboardResultType = QueryResult<GetLeaderboard, GetLeaderboardVariables>;

export default class GetLeaderboardQuery extends Query<GetLeaderboard, GetLeaderboardVariables> {}
