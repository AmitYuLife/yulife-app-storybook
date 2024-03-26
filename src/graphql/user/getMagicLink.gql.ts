import { gql, GetMagicLinkQueryVariables } from "@graphql/__generated";
import client from "@graphql/_core/client";

const getMagicLinkWithClient = ({ goToMyAccount = false, site, redirectUrl }: GetMagicLinkQueryVariables) =>
  client().query({
    fetchPolicy: "network-only",
    query: gql("GetMagicLinkDocument"),
    variables: { goToMyAccount, site, redirectUrl },
  });

export default getMagicLinkWithClient;
