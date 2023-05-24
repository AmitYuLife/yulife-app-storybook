import SudokuLeaderboardIcon from "@atoms/icon/sudoku-leaderboard-icon";
import { ActionButton } from "@components/molecules";
import { useTranslation } from "@hooks";
import { memo } from "react";

interface IProps {
  onPress: () => void;
}

const SudokuHistoryButton = ({ onPress }: IProps) => {
  const t = useTranslation(["screens.challenges.history.sudoku_leaderboard"]);

  return (
    <ActionButton
      label={t["screens.challenges.history.sudoku_leaderboard"]}
      onPress={onPress}
      icon={<SudokuLeaderboardIcon />}
    />
  );
};

export default memo(SudokuHistoryButton);
