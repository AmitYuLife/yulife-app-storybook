import gql from "graphql-tag";

export const GQL_MUTATION_UPDATE_NICKNAME = gql`
  mutation UpdateNickname($nickname: String!) {
    updateNickname(nickname: $nickname)
  }
`;
