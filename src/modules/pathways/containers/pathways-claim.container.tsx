import { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import PathwaysClaimScreen from "../screens/pathways-claim/pathways-claim.screen";
import { ROUTES } from "@navigation/constants";
import { usePathways } from "../hooks/usePathways";

interface IPathwaysClaimContainerProps {
  componentId: string;
}

const PathwaysClaimContainer = ({ componentId }: IPathwaysClaimContainerProps) => {
  const onClose = useCallback(() => {
    Navigation.popTo(ROUTES.pathways);
  }, []);

  const { reflectionProgress, isStreakComplete } = usePathways(componentId, { fetchPolicy: "network-only" });

  return (
    <PathwaysClaimScreen
      onClose={onClose}
      yucoinReward={reflectionProgress?.coinAwards[reflectionProgress?.currentProgress - 1]}
      healthChallenge={isStreakComplete}
    />
  );
};

export default memo(PathwaysClaimContainer);
