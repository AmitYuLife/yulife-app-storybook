import { gql } from "@apollo/client";
import client from "../_core/client";
import { GetMobileHints } from "../_core/schema";
import { GQL_FRAGMENT_HINT } from "@graphql/_fragments/hint.gql";

const GQL_QUERY_HINTS = gql`
  ${GQL_FRAGMENT_HINT}

  query GetMobileHints {
    getMobileHints {
      ...Hint
    }
  }
`;

export default function getMobileHints() {
  return client().query<GetMobileHints>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_HINTS,
  });
}
