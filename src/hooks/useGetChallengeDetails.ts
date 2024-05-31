import { QueryHookOptions, useQuery } from "@apollo/client";
import {
  GetMobileQuestLevelChallengeDetailsQuery,
  GetQuestMapLevelChallengeDetailsQuery,
  gql,
} from "@graphql/__generated";
import { get } from "lodash";

type Args = {
  slotId: string;
  tempGameUseSettingsConfigForQuestMapV2: boolean;
  level: number;
  levelSlotTemplateId: string;
  yuniversalMap?: number;
} & Pick<QueryHookOptions, "fetchPolicy">;

export const useGetChallengeDetails = ({
  slotId,
  level,
  levelSlotTemplateId,
  yuniversalMap,
  tempGameUseSettingsConfigForQuestMapV2,
  ...options
}: Args) => {
  const oldQuestMapDetails = useQuery(gql("GetQuestMapLevelChallengeDetailsDocument"), {
    ...options,
    variables: { levelSlotId: slotId },
    skip: !!tempGameUseSettingsConfigForQuestMapV2,
  });

  const newQuestMapDetails = useQuery(gql("GetMobileQuestLevelChallengeDetailsDocument"), {
    ...options,
    variables: { level, levelSlotTemplateId, yuniversalMap: yuniversalMap ? yuniversalMap : undefined },
    skip: !tempGameUseSettingsConfigForQuestMapV2,
  });

  return tempGameUseSettingsConfigForQuestMapV2 ? newQuestMapDetails : oldQuestMapDetails;
};

type GetDetailsKeyType =
  | keyof Omit<GetQuestMapLevelChallengeDetailsQuery, "__typename">
  | keyof Omit<GetMobileQuestLevelChallengeDetailsQuery, "__typename">;

export const getChallengeDetailsData = (
  data: ReturnType<typeof useGetChallengeDetails>["data"],
  tempGameUseSettingsConfigForQuestMapV2: boolean
):
  | GetQuestMapLevelChallengeDetailsQuery["getQuestMapLevelChallengeDetails"]
  | GetMobileQuestLevelChallengeDetailsQuery["getMobileQuestLevelChallengeDetails"] => {
  return get<ReturnType<typeof useGetChallengeDetails>["data"], GetDetailsKeyType>(
    data,
    tempGameUseSettingsConfigForQuestMapV2 ? "getMobileQuestLevelChallengeDetails" : "getQuestMapLevelChallengeDetails"
  );
};
