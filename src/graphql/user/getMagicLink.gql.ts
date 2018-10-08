import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { GetMagicLink } from "../_core/schema";

export const getMagicLinkGql = gql`
    query GetMagicLink {
        getMagicLink
    }
`;

export type GetMagicLinkResultType = QueryResult<GetMagicLink>;

export class GetMagicLinkQuery extends Query<GetMagicLink> {}
