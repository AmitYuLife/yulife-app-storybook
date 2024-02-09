import React, { memo } from "react";
import ChallengesListOldContainer from "./challenges-list-old.container";
import { useUserFeatures } from "@hooks";
import ChallengesListContainer from "./challenges-list.container";

interface IChallengesListProps {
  componentId: string;
  level: number;
  levelName: string;
  yuniversalMap?: number;
}

const ChallengesListWrapper = (props: IChallengesListProps) => {
  const { tempGameEnableYuHealth } = useUserFeatures();

  if (!tempGameEnableYuHealth) {
    return <ChallengesListOldContainer {...props} />;
  }

  return <ChallengesListContainer {...props} />;
};

export default memo(ChallengesListWrapper);
