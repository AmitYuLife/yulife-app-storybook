import gql from "graphql-tag";
import client from "../_core/client";
import { getSession } from "../_core/schema";

export const getSessionGql = gql`
    query getSession {
        getSession {
            id
            expires
        }
    }
`;

export default () =>
    client().query<getSession>({
        query: getSessionGql
    });
