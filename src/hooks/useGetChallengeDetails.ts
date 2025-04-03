import { QueryHookOptions, useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";

type Args = {
  level: number;
  levelSlotTemplateId: string;
  yuniversalMap?: number;
} & Pick<QueryHookOptions, "fetchPolicy">;

export const useGetChallengeDetails = ({ level, levelSlotTemplateId, yuniversalMap, fetchPolicy }: Args) => {
  return useQuery(gql("GetMobileQuestLevelChallengeDetailsDocument"), {
    fetchPolicy,
    variables: { level, levelSlotTemplateId, yuniversalMap: yuniversalMap ? yuniversalMap : undefined },
  });
};
