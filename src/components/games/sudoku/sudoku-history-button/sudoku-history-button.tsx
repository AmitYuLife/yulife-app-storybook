import SudokuLeaderboardIcon from "@atoms/icon/sudoku-leaderboard-icon";
import { ActionButton } from "@components/molecules";
import { t } from "@locale";
import { memo } from "react";

interface IProps {
  onPress: () => void;
  date?: string;
}

const SudokuHistoryButton = ({ date, onPress }: IProps) => {
  return (
    <ActionButton
      label={t("screens.challenges.history.sudoku_leaderboard", { date })}
      onPress={onPress}
      icon={<SudokuLeaderboardIcon />}
    />
  );
};

export default memo(SudokuHistoryButton);
