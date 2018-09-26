import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { GetActivityHistory } from "../_core/schema";

export const getActivityHistoryGql = gql`
    query GetActivityHistory($monthsAgo: Int) {
        getActivityHistoryWithLevels(monthsAgo: $monthsAgo) {
            id
            steps
            yucoin
            dayOfMonth
            dayOfWeek
            level
            challenges {
                id
                earned
                milestones
                name
                score
            }
        }
    }
`;

export type GetActivityHistoryResultType = QueryResult<GetActivityHistory>;

export default class GetActivityHistoryQuery extends Query<GetActivityHistory> {}
