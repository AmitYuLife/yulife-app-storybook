import { memo } from "react";
import StreakSaverCount from "./streak-saver-count";
import { useSelector } from "react-redux";
import { getStreakSaverCount } from "@redux/quest-map/quest-map.selectors";

interface IProps {
  textColor?: string;
}

const StreakSaverCountContainer = ({ textColor }: IProps) => {
  const streakSaverCount = useSelector(getStreakSaverCount);

  if (!streakSaverCount) {
    return null;
  }

  return <StreakSaverCount count={streakSaverCount} textColor={textColor} />;
};

export default memo(StreakSaverCountContainer);
