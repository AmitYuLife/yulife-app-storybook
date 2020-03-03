import gql from "graphql-tag";
import * as React from "react";
import { Query, QueryProps } from "react-apollo";
import { GetHighlights } from "../_core/schema";

export const getUserStats = gql`
    query GetHighlights {
        getUserStats {
            category
            title
            titleColor
            index
            data {
                cardType
                title
                value
                titleColor
                unit
                date
                subTitleColor
                dateText
                graphData {
                    weekData {
                        day
                        value
                    }
                    averageLineColor
                    graphColor
                }
                comparisonData {
                    firstTitle
                    firstTitleColor
                    firstValue
                    secondTitle
                    secondTitleColor
                    secondValue
                }
            }
        }
    }
`;

export default function GetUserStats(props: Partial<QueryProps<GetHighlights, {}>>) {
    return <Query {...(props as any)} query={getUserStats} />;
}
