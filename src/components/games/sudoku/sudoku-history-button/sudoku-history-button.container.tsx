import { useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import SudokuHistoryButton from "./sudoku-history-button";
import { t } from "@locale";
import moment from "moment";
import { LEVEL_SUMMARY_YUDOKU_LEADERBOARD } from "@ids";

interface IProps {
  componentId: string;
  date: string;
}

export const SudokuHistoryButtonContainer = ({ date, componentId }: IProps) => {
  const onPressSudokuLeaderboard = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.sudokuLeaderboard,
        name: ROUTES.sudokuLeaderboard,
        passProps: {
          date,
        },
      },
    });
  }, [componentId, date]);

  const dateString = useMemo(() => {
    const dateMoment = moment(date);
    if (moment().isSame(dateMoment, "day")) {
      return t("screens.challenges.history.sudoku_leaderboard_today");
    }

    return dateMoment.format("Do MMM");
  }, [date]);

  return (
    <SudokuHistoryButton
      onPress={onPressSudokuLeaderboard}
      date={dateString}
      testID={LEVEL_SUMMARY_YUDOKU_LEADERBOARD(dateString)}
    />
  );
};
