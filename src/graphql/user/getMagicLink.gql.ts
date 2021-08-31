import gql from "graphql-tag";
import client from "../_core/client";
import { GetMagicLink, GetMagicLinkVariables } from "../_core/schema";

export const GQL_QUERY_GET_MAGIC_LINK = gql`
  query GetMagicLink($goToMyAccount: Boolean) {
    getMagicLink(goToMyAccount: $goToMyAccount)
  }
`;

const getMagicLinkWithClient = (goToMyAccount = false) =>
  client().query<GetMagicLink, GetMagicLinkVariables>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_MAGIC_LINK,
    variables: { goToMyAccount },
  });

export default getMagicLinkWithClient;
