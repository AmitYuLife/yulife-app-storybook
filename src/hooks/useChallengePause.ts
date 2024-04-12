import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { useCallback } from "react";

export const useChallengePause = (tempGameUseSettingsConfigForQuestMap: boolean) => {
  const [oldPause] = useMutation(gql("ToggleChallengePauseDocument"));

  const [newPause] = useMutation(gql("ToggleMobileQuestLevelChallengePauseDocument"));

  const mutate = useCallback(
    ({ paused, challengeId, levelSlotId }: { paused: boolean; challengeId?: string; levelSlotId?: string }) => {
      if (!tempGameUseSettingsConfigForQuestMap) {
        return oldPause({
          variables: {
            levelSlotId,
            paused,
          },
        });
      }

      return newPause({
        variables: {
          challengeId,
          paused,
        },
      });
    },
    [newPause, oldPause, tempGameUseSettingsConfigForQuestMap]
  );

  return mutate;
};
