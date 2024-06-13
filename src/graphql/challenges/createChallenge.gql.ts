import client from "@graphql/_core/client";
import {
  ActiveChallengeSourceType,
  CreateMobileQuestLevelChallengeMutation,
  CreateMobileQuestLevelChallengeMutationVariables,
  CreateQuestMapLevelChallengeMutation,
  CreateQuestMapLevelChallengeMutationVariables,
  gql,
} from "@graphql/__generated";
import { FetchResult } from "@apollo/client";
import get from "lodash/get";

type Args = {
  tempGameUseSettingsConfigForQuestMapV2: boolean;
  createMobileQuestLevelChallengeVariables: CreateMobileQuestLevelChallengeMutationVariables;
  createQuestMapLevelChallengeVariables: CreateQuestMapLevelChallengeMutationVariables;
};

export const createChallengeToggle = ({
  tempGameUseSettingsConfigForQuestMapV2 = false,
  createQuestMapLevelChallengeVariables,
  createMobileQuestLevelChallengeVariables,
}: Args): Promise<FetchResult<CreateMobileQuestLevelChallengeMutation | CreateQuestMapLevelChallengeMutation>> => {
  if (!tempGameUseSettingsConfigForQuestMapV2) {
    return client().mutate({
      mutation: gql("CreateQuestMapLevelChallengeDocument"),
      variables: {
        ...createQuestMapLevelChallengeVariables,
        createdBySource: ActiveChallengeSourceType.Phone,
      },
    });
  }

  return client().mutate({
    mutation: gql("CreateMobileQuestLevelChallengeDocument"),
    variables: {
      ...createMobileQuestLevelChallengeVariables,
      createdBySource: ActiveChallengeSourceType.Phone,
    },
  });
};

export type CreateChallengeData =
  | CreateMobileQuestLevelChallengeMutation["createMobileQuestLevelChallenge"]
  | CreateQuestMapLevelChallengeMutation["createQuestMapLevelChallenge"];

type CreateChallengeKeyType =
  | keyof Omit<CreateMobileQuestLevelChallengeMutation, "__typename">
  | keyof Omit<CreateQuestMapLevelChallengeMutation, "__typename">;

type Data = Awaited<ReturnType<typeof createChallengeToggle>>["data"];

export const getCreateChallengeData = (
  data: Data,
  tempGameUseSettingsConfigForQuestMapV2: boolean
): CreateChallengeData => {
  return get<Data, CreateChallengeKeyType>(
    data,
    tempGameUseSettingsConfigForQuestMapV2 ? "createMobileQuestLevelChallenge" : "createQuestMapLevelChallenge"
  );
};
