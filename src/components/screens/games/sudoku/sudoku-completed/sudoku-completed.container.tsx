import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { useDispatch } from "react-redux";
import { challengeResetAction } from "@redux/levels/levels.actions";
import { memo, useCallback, useEffect } from "react";
import SudokuCompletedScreen from "./sudoku-completed.screen";
import { showYuModal } from "@navigation/root";
import { sudokuReset } from "@redux/sudoku/sudoku.actions";
import { useBackHandler } from "@hooks";
import { displayStreaksCompletedAction } from "@redux/streaks/streaks.actions";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { GetSudokuBoardQuery } from "@graphql/__generated";

interface IProps {
  results: GetSudokuBoardQuery["getSudokuBoard"]["results"];
  stats: GetSudokuBoardQuery["getSudokuBoard"]["stats"];
  isPractice?: boolean;
  reward: number;
}

export const SudokuCompletedContainer = ({ reward, isPractice, results, stats }: IProps) => {
  const dispatch = useDispatch();

  useBackHandler(() => {
    return true;
  });

  useEffect(() => {
    dispatch(challengeResetAction());
    dispatch(displayStreaksCompletedAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCollect = useCallback(() => {
    dispatch(sudokuReset());
    dispatch(getUserDataStart({ types: [AppDataType.activeStreak] }));

    Navigation.popTo(isPractice ? ROUTES.sudokuStaging : ROUTES.quests);

    if (!isPractice && !stats?.leaderboardId) {
      showYuModal({
        component: {
          id: MODALS.sudokuLeaderboardConsent,
          name: MODALS.sudokuLeaderboardConsent,
        },
      });
    }
  }, [dispatch, isPractice, stats]);

  return (
    <SudokuCompletedScreen
      isPractice={isPractice}
      reward={reward}
      onCollect={onCollect}
      results={results}
      stats={stats}
    />
  );
};

export default memo(SudokuCompletedContainer);
