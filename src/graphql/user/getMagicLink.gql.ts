import { gql } from "@apollo/client";
import client from "../_core/client";
import { GetMagicLink, GetMagicLinkVariables } from "../_core/schema";

export const GQL_QUERY_GET_MAGIC_LINK = gql`
  query GetMagicLink($goToMyAccount: Boolean, $site: MagicLinkSite, $redirectUrl: String) {
    getMagicLink(goToMyAccount: $goToMyAccount, site: $site, redirectUrl: $redirectUrl)
  }
`;

const getMagicLinkWithClient = ({ goToMyAccount = false, site, redirectUrl }: GetMagicLinkVariables) =>
  client().query<GetMagicLink, GetMagicLinkVariables>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_MAGIC_LINK,
    variables: { goToMyAccount, site, redirectUrl },
  });

export default getMagicLinkWithClient;
