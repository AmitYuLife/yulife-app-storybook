import gql from "graphql-tag";
import client from "../_core/client";

import { SubmitUnity, SubmitUnityVariables } from "../_core/schema";
import { GQL_QUERY_GET_QUEST_MAP_LEVEL_LIST } from "./getQuestMapLevelList";

export const GQL_MUTATION_SUBMIT_UNITY = gql`
  mutation SubmitUnity($levelId: String!) {
    submitUnity(levelId: $levelId)
  }
`;

export default (levelId: string) =>
  client().mutate<SubmitUnity, SubmitUnityVariables>({
    mutation: GQL_MUTATION_SUBMIT_UNITY,
    variables: { levelId },
    refetchQueries: [{ query: GQL_QUERY_GET_QUEST_MAP_LEVEL_LIST }],
  });
