import React, { memo } from "react";
import ChallengesListOldContainer from "./challenges-list-old.container";

interface IChallengesListProps {
  componentId: string;
  level: number;
  levelName: string;
  yuniversalMap?: number;
}

const ChallengesListWrapper = (props: IChallengesListProps) => {
  // TODO: Add new challenges list container under toggle tempGameEnableYuHealth

  return <ChallengesListOldContainer {...props} />;
};

export default memo(ChallengesListWrapper);
