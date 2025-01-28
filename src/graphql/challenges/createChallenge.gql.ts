import client from "@graphql/_core/client";
import {
  ActiveChallengeSourceType,
  CreateMobileQuestLevelChallengeMutation,
  CreateMobileQuestLevelChallengeMutationVariables,
  CreateQuestMapLevelChallengeMutation,
  CreateQuestMapLevelChallengeMutationVariables,
  gql,
} from "@graphql/__generated";

type Args = {
  createMobileQuestLevelChallengeVariables: CreateMobileQuestLevelChallengeMutationVariables;
  createQuestMapLevelChallengeVariables: CreateQuestMapLevelChallengeMutationVariables;
};

export const createChallengeToggle = ({
  createQuestMapLevelChallengeVariables,
  createMobileQuestLevelChallengeVariables,
}: Args) => {
  if (!createQuestMapLevelChallengeVariables?.levelSlotId) {
    return client().mutate({
      mutation: gql("CreateMobileQuestLevelChallengeDocument"),
      variables: {
        ...createMobileQuestLevelChallengeVariables,
        createdBySource: ActiveChallengeSourceType.Phone,
      },
    });
  }

  return client().mutate({
    mutation: gql("CreateQuestMapLevelChallengeDocument"),
    variables: {
      ...createQuestMapLevelChallengeVariables,
      createdBySource: ActiveChallengeSourceType.Phone,
    },
  });
};

export type CreateChallengeData =
  | CreateMobileQuestLevelChallengeMutation["createMobileQuestLevelChallenge"]
  | CreateQuestMapLevelChallengeMutation["createQuestMapLevelChallenge"];

type Data = Awaited<ReturnType<typeof createChallengeToggle>>["data"];

export const getCreateChallengeData = (data: Data): CreateChallengeData => {
  if (!data) {
    return null;
  }

  if ("createMobileQuestLevelChallenge" in data) {
    return data?.createMobileQuestLevelChallenge;
  }

  if ("createQuestMapLevelChallenge" in data) {
    return data?.createQuestMapLevelChallenge;
  }
};
