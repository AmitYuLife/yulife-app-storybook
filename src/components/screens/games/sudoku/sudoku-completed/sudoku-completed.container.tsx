import { useMutation } from "@apollo/client";
import {
  GetSudokuBoard_getSudokuBoard_results,
  GetSudokuBoard_getSudokuBoard_stats,
  SubmitSudokuSolution,
  SubmitSudokuSolutionVariables,
} from "@graphql/_core/schema";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { GQL_MUTATION_SUBMIT_SUDOKU_SOLUTION } from "@graphql/brainGames/sudoku/submitSudokuResults.gql";
import { useSelector, useDispatch } from "react-redux";
import { challengeResetSuccessAction } from "@redux/levels/levels.actions";
import { SudokuDifficulty } from "@graphql/_core/schema/globalTypes";
import { getSudokuState } from "@redux/sudoku/sudoku.selectors";
import { memo, useCallback, useEffect } from "react";
import SudokuCompletedScreen from "./sudoku-completed.screen";
import { showYuModal } from "@navigation/root";
import { sudokuReset } from "@redux/sudoku/sudoku.actions";
import { useBackHandler } from "@hooks";

interface IProps {
  results: GetSudokuBoard_getSudokuBoard_results;
  stats: GetSudokuBoard_getSudokuBoard_stats;
  reward: number;
}

export const SudokuCompletedContainer = ({ reward, results, stats }: IProps) => {
  const dispatch = useDispatch();
  const state = useSelector(getSudokuState);
  const [submitSudokuSolution, { loading }] = useMutation<SubmitSudokuSolution, SubmitSudokuSolutionVariables>(
    GQL_MUTATION_SUBMIT_SUDOKU_SOLUTION
  );

  useBackHandler(() => {
    return true;
  });

  useEffect(() => {
    submitSudokuSolution({
      variables: {
        results: {
          date: state.gameIdentifier,
          mistakes: results.mistakes,
          hints: results.hints,
          baseTime: results.adjustedTime,
          adjustedTime: results.adjustedTime,
          levelSlotId: state.levelSlotId,
          difficulty: SudokuDifficulty.EASY,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCollect = useCallback(() => {
    dispatch(challengeResetSuccessAction());
    dispatch(sudokuReset());
    Navigation.popTo(ROUTES.quests);

    if (!stats?.leaderboardId) {
      showYuModal({
        component: {
          id: MODALS.sudokuLeaderboardConsent,
          name: MODALS.sudokuLeaderboardConsent,
          passProps: {
            onConsented: () => {
              Navigation.popTo(ROUTES.quests);
            },
          },
        },
      });
    }
  }, [dispatch, stats]);

  return (
    <SudokuCompletedScreen reward={reward} isLoading={loading} onCollect={onCollect} results={results} stats={stats} />
  );
};

export default memo(SudokuCompletedContainer);
