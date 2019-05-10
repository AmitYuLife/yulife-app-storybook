import gql from "graphql-tag";
import * as React from "react";
import { Query, QueryProps, QueryResult } from "react-apollo";
import { GetActivityHistory } from "../_core/schema";

export const getActivityHistoryGql = gql`
    query GetActivityHistory($monthsAgo: Int) {
        getActivityHistoryWithLevels(monthsAgo: $monthsAgo) {
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

export default function GetActivityHistoryQuery(props: Partial<QueryProps<GetActivityHistory>>) {
    return <Query {...props as any} query={getActivityHistoryGql} />;
}
