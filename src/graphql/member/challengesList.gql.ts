import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { ChallengesList } from "../_core/schema";

export const challengesListGql = gql`
    query ChallengesList {
        getChallenges {
            id
            subtype
            level
            target
            totalCoins
            timelimit
            unit
            milestones {
                target
                coins
            }
            __typename
        }
    }
`;

export type ChallengesListResultType = QueryResult<ChallengesList>;

export default class ChallengesListQuery extends Query<ChallengesList> {}
