import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { GetActivityHistory } from "../_core/schema";

export const getActivityHistoryGql = gql`
    query GetActivityHistory($monthsAgo: Int) {
        data: getActivityStats(monthsAgo: $monthsAgo) {
            id
            date
            passive {
                id
                data
                yuCoinAwarded
            }
            challenge {
                id
                actions
                data
                yuCoinAwarded
                milestoneLog {
                    id
                }
                challengeTemplate {
                    id
                    subtype
                }
            }
        }
    }
`;

export type GetActivityHistoryResultType = QueryResult<GetActivityHistory>;

export default class GetActivityHistoryQuery extends Query<GetActivityHistory> {}
