import gql from "graphql-tag";
import * as React from "react";
import { Query, QueryProps, QueryResult } from "react-apollo";
import { GetActivityHistory, GetActivityHistoryVariables } from "../_core/schema";

export const getActivityHistoryGql = gql`
    query GetActivityHistory($monthsAgo: Int, $isFullActivity: Boolean) {
        getActivityHistoryWithLevels(monthsAgo: $monthsAgo, isFullActivity: $isFullActivity) {
            id
            steps
            sources {
                garmin
                fitbit
                device
            }
            yucoin
            dayOfMonth
            dayOfWeek
            monthAndYear
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

export type GetActivityHistoryResultType = QueryResult<GetActivityHistory, GetActivityHistoryVariables>;

export default function GetActivityHistoryQuery(
    props: Partial<QueryProps<GetActivityHistory, GetActivityHistoryVariables>>
) {
    return <Query {...(props as any)} query={getActivityHistoryGql} />;
}
