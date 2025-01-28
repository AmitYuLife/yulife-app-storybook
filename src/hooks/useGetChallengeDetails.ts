import { QueryHookOptions, useQuery } from "@apollo/client";
import { GetMobileQuestLevelChallengeDetailsQuery, gql } from "@graphql/__generated";

type Args = {
  level: number;
  levelSlotTemplateId: string;
  yuniversalMap?: number;
} & Pick<QueryHookOptions, "fetchPolicy">;

export const useGetChallengeDetails = ({ level, levelSlotTemplateId, yuniversalMap, ...options }: Args) => {
  const newQuestMapDetails = useQuery(gql("GetMobileQuestLevelChallengeDetailsDocument"), {
    ...options,
    variables: { level, levelSlotTemplateId, yuniversalMap: yuniversalMap ? yuniversalMap : undefined },
  });

  return newQuestMapDetails;
};

export const getChallengeDetailsData = (
  data: ReturnType<typeof useGetChallengeDetails>["data"]
): GetMobileQuestLevelChallengeDetailsQuery["getMobileQuestLevelChallengeDetails"] => {
  if (!data) {
    return undefined;
  }

  return data?.getMobileQuestLevelChallengeDetails;
};
