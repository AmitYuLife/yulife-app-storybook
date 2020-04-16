import gql from "graphql-tag";
import client from "../_core/client";
import { GetMagicLink } from "../_core/schema";

export const GQL_QUERY_GET_MAGIC_LINK = gql`
    query GetMagicLink {
        getMagicLink
    }
`;

const getMagicLinkWithClient = () =>
    client().query<GetMagicLink>({
        fetchPolicy: "network-only",
        query: GQL_QUERY_GET_MAGIC_LINK
    });

export default getMagicLinkWithClient;
