import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import client from "../_core/client";
import { GetMagicLink } from "../_core/schema";

export const getMagicLinkGql = gql`
    query GetMagicLink {
        getMagicLink
    }
`;

export type GetMagicLinkResultType = QueryResult<GetMagicLink>;

export class GetMagicLinkQuery extends Query<GetMagicLink> {}

const getMagicLinkWithClient = () =>
    client().query<GetMagicLink>({
        fetchPolicy: "network-only",
        query: getMagicLinkGql
    });

export default getMagicLinkWithClient;
