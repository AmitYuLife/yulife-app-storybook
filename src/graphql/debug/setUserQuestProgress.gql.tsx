import { gql } from "@apollo/client";
import client from "../_core/client";
import { SetUserQuestProgress, SetUserQuestProgressVariables } from "../_core/schema";
import { GQL_QUERY_GET_QUEST_MAP } from "@graphql/challenges";

export const GQL_MUTATION_SET_USER_QUEST_PROGRESS = gql`
  mutation SetUserQuestProgress($currentLevel: Int!, $yuniversalMap: Int, $yuniversalLevel: Int) {
    setUserQuestProgress(currentLevel: $currentLevel, yuniversalMap: $yuniversalMap, yuniversalLevel: $yuniversalLevel)
  }
`;

export default (currentLevel: number, yuniversalMap?: number, yuniversalLevel?: number) =>
  client().mutate<SetUserQuestProgress, SetUserQuestProgressVariables>({
    mutation: GQL_MUTATION_SET_USER_QUEST_PROGRESS,
    variables: { currentLevel, yuniversalMap, yuniversalLevel },
    refetchQueries: [{ query: GQL_QUERY_GET_QUEST_MAP }],
  });
