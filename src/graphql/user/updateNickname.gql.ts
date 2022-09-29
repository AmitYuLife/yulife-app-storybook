import { gql } from "@apollo/client";

export const GQL_MUTATION_UPDATE_NICKNAME = gql`
  mutation UpdateNickname($nickname: String!) {
    updateNickname(nickname: $nickname)
  }
`;
