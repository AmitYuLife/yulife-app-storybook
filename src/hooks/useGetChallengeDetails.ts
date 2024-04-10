import { QueryHookOptions, useQuery } from "@apollo/client";
import {
  GetMobileQuestLevelChallengeDetailsQuery,
  GetQuestMapLevelChallengeDetailsQuery,
  gql,
} from "@graphql/__generated";
import { get } from "lodash";

type Args = {
  slotId: string;
  tempGameUseSettingsConfigForQuestMap: boolean;
  level: number;
  levelSlotTemplateId: string;
  yuniversalMap?: number;
} & Pick<QueryHookOptions, "fetchPolicy">;

export const useGetChallengeDetails = ({
  slotId,
  level,
  levelSlotTemplateId,
  yuniversalMap,
  tempGameUseSettingsConfigForQuestMap,
  ...options
}: Args) => {
  const oldQuestMapDetails = useQuery(gql("GetQuestMapLevelChallengeDetailsDocument"), {
    ...options,
    variables: { levelSlotId: slotId },
    skip: !!tempGameUseSettingsConfigForQuestMap,
  });

  const newQuestMapDetails = useQuery(gql("GetMobileQuestLevelChallengeDetailsDocument"), {
    ...options,
    variables: { level, levelSlotTemplateId, yuniversalMap: yuniversalMap ? yuniversalMap : undefined },
    skip: !tempGameUseSettingsConfigForQuestMap,
  });

  return tempGameUseSettingsConfigForQuestMap ? newQuestMapDetails : oldQuestMapDetails;
};

type GetDetailsKeyType =
  | keyof Omit<GetQuestMapLevelChallengeDetailsQuery, "__typename">
  | keyof Omit<GetMobileQuestLevelChallengeDetailsQuery, "__typename">;

export const getChallengeDetailsData = (
  data: ReturnType<typeof useGetChallengeDetails>["data"],
  tempGameUseSettingsConfigForQuestMap: boolean
):
  | GetQuestMapLevelChallengeDetailsQuery["getQuestMapLevelChallengeDetails"]
  | GetMobileQuestLevelChallengeDetailsQuery["getMobileQuestLevelChallengeDetails"] => {
  return get<ReturnType<typeof useGetChallengeDetails>["data"], GetDetailsKeyType>(
    data,
    tempGameUseSettingsConfigForQuestMap ? "getMobileQuestLevelChallengeDetails" : "getQuestMapLevelChallengeDetails"
  );
};
