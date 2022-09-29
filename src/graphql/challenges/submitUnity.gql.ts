import { gql } from "@apollo/client";
import client from "../_core/client";

import { SubmitUnity, SubmitUnityVariables } from "../_core/schema";
import { GQL_QUERY_GET_QUEST_MAP } from "./getQuestMap.gql";

export const GQL_MUTATION_SUBMIT_UNITY = gql`
  mutation SubmitUnity($levelId: String!) {
    submitUnity(levelId: $levelId)
  }
`;

export default (levelId: string) =>
  client().mutate<SubmitUnity, SubmitUnityVariables>({
    mutation: GQL_MUTATION_SUBMIT_UNITY,
    variables: { levelId },
    refetchQueries: [{ query: GQL_QUERY_GET_QUEST_MAP }],
  });
