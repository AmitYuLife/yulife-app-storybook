import { MutationFunctionOptions, useMutation } from "@apollo/client";
import {
  SubmitMobileQuestLevelSudokuSolutionMutation,
  SubmitSudokuSolutionMutation,
  SudokuDifficulty,
  gql,
} from "@graphql/__generated";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { getActiveSocialGroupLeaderboard } from "@redux/leaderboards/leaderboards.selectors";
import { SocialGroupLeaderboardConfigId } from "@redux/leaderboards/leaderboards.types";

interface SubmitProps {
  adjustedTime: number;
  baseTime: number;
  date: string;
  difficulty: SudokuDifficulty;
  guesses?: number[];
  hints: number;
  mistakes: number;
  challengeId: string;
  levelSlotId: string;
}

export const useSubmitSudokuSolution = (tempGameUseSettingsConfigForQuestMapV3: boolean) => {
  const activeLeaderboard = useSelector(getActiveSocialGroupLeaderboard);

  const canRefetch = useMemo(
    () =>
      activeLeaderboard?.leaderboardConfigId === SocialGroupLeaderboardConfigId.Dailysudoku &&
      activeLeaderboard?.consent,
    [activeLeaderboard]
  );

  const options = useMemo(
    () =>
      canRefetch
        ? {
            refetchQueries: [
              {
                query: gql("GetMobileSocialGroupLeaderboardItemsDocument"),
                variables: {
                  leaderboardId: activeLeaderboard?.leaderboardId,
                },
              },
            ],
          }
        : {},
    [canRefetch, activeLeaderboard?.leaderboardId]
  );

  const [oldSubmitSolution] = useMutation(gql(`SubmitSudokuSolutionDocument`));

  const [newSubmitSolution] = useMutation(gql(`SubmitMobileQuestLevelSudokuSolutionDocument`));

  const submitSolution = useCallback(
    (solution: SubmitProps, mutationHookOptions: MutationFunctionOptions) => {
      const { levelSlotId, challengeId, ...commonVariables } = solution;

      if (!tempGameUseSettingsConfigForQuestMapV3 && levelSlotId) {
        return oldSubmitSolution({
          ...mutationHookOptions,
          ...options,
          variables: {
            results: {
              ...commonVariables,
              levelSlotId,
            },
          },
        });
      }

      return newSubmitSolution({
        ...mutationHookOptions,
        ...options,
        variables: {
          results: {
            ...commonVariables,
            challengeId,
          },
        },
      });
    },
    [tempGameUseSettingsConfigForQuestMapV3, newSubmitSolution, oldSubmitSolution, options]
  );

  return submitSolution;
};

type SubmitSolutionType = SubmitSudokuSolutionMutation | SubmitMobileQuestLevelSudokuSolutionMutation;

export const getSubmitSudokuData = (
  data: SubmitSolutionType
):
  | SubmitSudokuSolutionMutation["submitSudokuSolution"]
  | SubmitMobileQuestLevelSudokuSolutionMutation["submitMobileQuestLevelSudokuSolution"] => {
  if ("submitMobileQuestLevelSudokuSolution" in data) {
    return data?.submitMobileQuestLevelSudokuSolution;
  }

  if ("submitSudokuSolution" in data) {
    return data?.submitSudokuSolution;
  }
};
