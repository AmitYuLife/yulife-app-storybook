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
  tempGameUseSettingsConfigForQuestMap: boolean;
  createMobileQuestLevelChallengeVariables: CreateMobileQuestLevelChallengeMutationVariables;
  createQuestMapLevelChallengeVariables: CreateQuestMapLevelChallengeMutationVariables;
};

export const createChallengeToggle = ({
  tempGameUseSettingsConfigForQuestMap = false,
  createQuestMapLevelChallengeVariables,
  createMobileQuestLevelChallengeVariables,
}: Args): Promise<FetchResult<CreateMobileQuestLevelChallengeMutation | CreateQuestMapLevelChallengeMutation>> => {
  if (!tempGameUseSettingsConfigForQuestMap) {
    return client().mutate({
      mutation: gql("CreateQuestMapLevelChallengeDocument"),
      variables: {
        ...createQuestMapLevelChallengeVariables,
        createdBySource: ActiveChallengeSourceType.Phone,
      },
      errorPolicy: "ignore",
    });
  }

  return client().mutate({
    mutation: gql("CreateMobileQuestLevelChallengeDocument"),
    variables: {
      ...createMobileQuestLevelChallengeVariables,
      createdBySource: ActiveChallengeSourceType.Phone,
    },
    errorPolicy: "ignore",
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
  tempGameUseSettingsConfigForQuestMap: boolean
): CreateChallengeData => {
  return get<Data, CreateChallengeKeyType>(
    data,
    tempGameUseSettingsConfigForQuestMap ? "createMobileQuestLevelChallenge" : "createQuestMapLevelChallenge"
  );
};
