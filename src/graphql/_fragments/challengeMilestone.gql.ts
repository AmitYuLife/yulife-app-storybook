import gql from "graphql-tag";

export const milestoneFragmentGql = gql`
    fragment Milestone on Milestone {
        id
        description
        unit
        target
        coins
        XP
    }
`;
