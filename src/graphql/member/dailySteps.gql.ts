import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { DailySteps } from "../_core/schema";

export const dailyStepsGql = gql`
    query DailySteps {
        getCurrentUser {
            userStatus {
                totalCoins
            }
            userFeatures {
                name
                value
            }
        }
    }
`;

export type DailyStepsResultType = QueryResult<DailySteps>;

export default class DailyStepsQuery extends Query<DailySteps> {}
