import { gql } from "@apollo/client";
import client from "../_core/client";
import { ChangeUserLocale, ChangeUserLocaleVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_CHANGE_USER_LOCALE = gql`
  mutation ChangeUserLocale($locale: String!) {
    changeUserLocale(locale: $locale)
  }
`;

const changeUserLocaleWithClient = (variables: ChangeUserLocaleVariables) =>
  client().mutate<ChangeUserLocale, ChangeUserLocaleVariables>({
    mutation: GQL_MUTATION_CHANGE_USER_LOCALE,
    variables,
  });

export default changeUserLocaleWithClient;
