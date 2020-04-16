import gql from "graphql-tag";

export const GQL_FRAGMENT_MILESTONE = gql`
    fragment Milestone on Milestone {
        id
        description
        unit
        target
        coins
        XP
    }
`;
