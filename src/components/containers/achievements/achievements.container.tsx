import { AchievementsScreen } from "@components/screens";

import { memo } from "react";

const AchievementsContainer = () => {
  return <AchievementsScreen achievementPoints={0} achievements={[]} />;
};

export default memo(AchievementsContainer);
