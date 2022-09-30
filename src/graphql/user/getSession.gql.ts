import { gql } from "@apollo/client";
import client from "../_core/client";
import { GetSession } from "../_core/schema";

export const GQL_QUERY_GET_SESSION = gql`
  query GetSession {
    getSession {
      id
      expires
    }
    mobileUpgradeRequired {
      title
      message
      imageUrl
      isDismissable
    }
  }
`;

export default () =>
  client().query<GetSession>({
    query: GQL_QUERY_GET_SESSION,
    fetchPolicy: "network-only",
  });
