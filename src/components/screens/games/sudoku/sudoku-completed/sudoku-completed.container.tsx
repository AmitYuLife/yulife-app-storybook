import { GetSudokuBoard_getSudokuBoard_results, GetSudokuBoard_getSudokuBoard_stats } from "@graphql/_core/schema";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { useDispatch } from "react-redux";
import { challengeResetSuccessAction } from "@redux/levels/levels.actions";
import { memo, useCallback } from "react";
import SudokuCompletedScreen from "./sudoku-completed.screen";
import { showYuModal } from "@navigation/root";
import { sudokuReset } from "@redux/sudoku/sudoku.actions";
import { useBackHandler } from "@hooks";
import { displayStreaksCompletedAction } from "@redux/streaks/streaks.actions";

interface IProps {
  results: GetSudokuBoard_getSudokuBoard_results;
  stats: GetSudokuBoard_getSudokuBoard_stats;
  reward: number;
}

export const SudokuCompletedContainer = ({ reward, results, stats }: IProps) => {
  const dispatch = useDispatch();

  useBackHandler(() => {
    return true;
  });

  const onCollect = useCallback(() => {
    dispatch(challengeResetSuccessAction());
    dispatch(sudokuReset());
    dispatch(displayStreaksCompletedAction());

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

  return <SudokuCompletedScreen reward={reward} onCollect={onCollect} results={results} stats={stats} />;
};

export default memo(SudokuCompletedContainer);
