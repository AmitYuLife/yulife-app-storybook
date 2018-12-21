import gql from "graphql-tag";
import client from "../_core/client";

import { SubmitUnity, SubmitUnityVariables } from "../_core/schema";

export const submitUnityGql = gql`
    mutation SubmitUnity($levelId: String!) {
        submitUnity(levelId: $levelId)
    }
`;

export default (levelId: string) =>
    client.mutate<SubmitUnity, SubmitUnityVariables>({
        mutation: submitUnityGql,
        variables: { levelId }
    });
