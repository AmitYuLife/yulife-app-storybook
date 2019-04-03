import gql from "graphql-tag";
import * as React from "react";
import { Query, QueryProps, QueryResult } from "react-apollo";
import { GetDebugCodes } from "../_core/schema";

export const getDebugCodesGql = gql`
    query GetDebugCodes {
        getDebugCodes
    }
`;

export type GetDebugCodesResultType = QueryResult<GetDebugCodes>;

export default function GetDebugCodesQuery(props: Partial<QueryProps<GetDebugCodes>>) {
    return <Query {...props as any} query={getDebugCodesGql} />;
}
