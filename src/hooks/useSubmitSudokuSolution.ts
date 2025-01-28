import { MutationFunctionOptions, useMutation } from "@apollo/client";
import { SubmitMobileQuestLevelSudokuSolutionMutation, SudokuDifficulty, gql } from "@graphql/__generated";
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

export const useSubmitSudokuSolution = () => {
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

  const [newSubmitSolution] = useMutation(gql(`SubmitMobileQuestLevelSudokuSolutionDocument`));

  const submitSolution = useCallback(
    (solution: SubmitProps, mutationHookOptions: MutationFunctionOptions) => {
      const { challengeId, ...commonVariables } = solution;

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
    [newSubmitSolution, options]
  );

  return submitSolution;
};

type SubmitSolutionType = SubmitMobileQuestLevelSudokuSolutionMutation;

export const getSubmitSudokuData = (
  data: SubmitSolutionType
): SubmitMobileQuestLevelSudokuSolutionMutation["submitMobileQuestLevelSudokuSolution"] => {
  return data?.submitMobileQuestLevelSudokuSolution;
};
