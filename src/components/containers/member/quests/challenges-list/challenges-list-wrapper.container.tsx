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
  const { tempGameEnableReleaseYuHealthV4 } = useUserFeatures();

  if (!tempGameEnableReleaseYuHealthV4) {
    return <ChallengesListOldContainer {...props} />;
  }

  return <ChallengesListContainer {...props} />;
};

export default memo(ChallengesListWrapper);
