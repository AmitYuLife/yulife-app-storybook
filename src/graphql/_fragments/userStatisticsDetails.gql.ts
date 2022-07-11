import gql from "graphql-tag";

export const GQL_FRAGMENT_USER_STATISTICS_DETAILS = gql`
  fragment UserStatisticDetails on UserStatisticDetails {
    id
    type
    icon {
      id
      uri(options: { width: 72, height: 72 })
    }
    name
    label
    value
    info
  }
`;
