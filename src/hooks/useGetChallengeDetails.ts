import { QueryHookOptions, useQuery } from "@apollo/client";
import {
  GetMobileQuestLevelChallengeDetailsQuery,
  GetQuestMapLevelChallengeDetailsQuery,
  gql,
} from "@graphql/__generated";

type Args = {
  slotId: string;
  tempGameUseSettingsConfigForQuestMapV3: boolean;
  level: number;
  levelSlotTemplateId: string;
  yuniversalMap?: number;
} & Pick<QueryHookOptions, "fetchPolicy">;

export const useGetChallengeDetails = ({
  slotId,
  level,
  levelSlotTemplateId,
  yuniversalMap,
  tempGameUseSettingsConfigForQuestMapV3,
  ...options
}: Args) => {
  const useOldQuery = Boolean(slotId && !tempGameUseSettingsConfigForQuestMapV3);

  const oldQuestMapDetails = useQuery(gql("GetQuestMapLevelChallengeDetailsDocument"), {
    ...options,
    variables: { levelSlotId: slotId },
    skip: !useOldQuery,
  });

  const newQuestMapDetails = useQuery(gql("GetMobileQuestLevelChallengeDetailsDocument"), {
    ...options,
    variables: { level, levelSlotTemplateId, yuniversalMap: yuniversalMap ? yuniversalMap : undefined },
    skip: useOldQuery,
  });

  return useOldQuery ? oldQuestMapDetails : newQuestMapDetails;
};

export const getChallengeDetailsData = (
  data: ReturnType<typeof useGetChallengeDetails>["data"]
):
  | GetQuestMapLevelChallengeDetailsQuery["getQuestMapLevelChallengeDetails"]
  | GetMobileQuestLevelChallengeDetailsQuery["getMobileQuestLevelChallengeDetails"] => {
  if (!data) {
    return undefined;
  }

  if ("getMobileQuestLevelChallengeDetails" in data) {
    return data?.getMobileQuestLevelChallengeDetails;
  }

  if ("getQuestMapLevelChallengeDetails" in data) {
    return data?.getQuestMapLevelChallengeDetails;
  }
};
