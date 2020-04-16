import gql from "graphql-tag";

export const GQL_QUERY_GET_USER_STATS = gql`
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
