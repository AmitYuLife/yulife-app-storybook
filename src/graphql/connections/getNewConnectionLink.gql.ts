import { gql } from "@apollo/client";
import client from "../_core/client";
import { GetNewConnectionLink, GetNewConnectionLinkVariables } from "../_core/schema";

export const GQL_MUTATION_GET_NEW_CONNECTION_LINK = gql`
  mutation GetNewConnectionLink($name: String!) {
    getNewConnectionLink(name: $name)
  }
`;

export const getNewConnectionLinkWithClient = (name: string) =>
  client().mutate<GetNewConnectionLink, GetNewConnectionLinkVariables>({
    mutation: GQL_MUTATION_GET_NEW_CONNECTION_LINK,
    variables: { name },
  });
