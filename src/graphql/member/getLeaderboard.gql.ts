import gql from "graphql-tag";

export const GQL_QUERY_LEADERBOARD = gql`
    query GetLeaderboard($sortBy: String, $leaderboardId: String) {
        getLeaderboard(sortBy: $sortBy, leaderboardId: $leaderboardId) {
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
