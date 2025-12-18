import React, { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import PathwaysClaimScreen from "../screens/pathways-claim/pathways-claim.screen";

interface Props {
  componentId: string;
}

const PathwaysClaimContainer = ({ componentId }: Props) => {
  const onClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  return <PathwaysClaimScreen onClose={onClose} yucoinReward={1337} healthChallenge={true} />;
};

export default memo(PathwaysClaimContainer);
