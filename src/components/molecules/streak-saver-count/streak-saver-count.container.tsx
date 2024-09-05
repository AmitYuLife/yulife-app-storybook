import { memo } from "react";
import StreakSaverCount from "./streak-saver-count";
import { useSelector } from "react-redux";
import { getStreakSaverCount } from "@redux/quest-map/quest-map.selectors";

const StreakSaverCountContainer = () => {
  const streakSaverCount = useSelector(getStreakSaverCount);

  if (!streakSaverCount) {
    return null;
  }

  return <StreakSaverCount count={streakSaverCount} />;
};

export default memo(StreakSaverCountContainer);
