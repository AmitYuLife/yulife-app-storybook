import { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import PathwaysClaimScreen from "../screens/pathways-claim/pathways-claim.screen";
import { ROUTES } from "@navigation/constants";
import { usePathways } from "../hooks/usePathways";
import { usePathwayChallenge } from "@components/containers/member/quests/challenges-list/hooks/usePathwayChallenge";

interface IPathwaysClaimContainerProps {
  componentId: string;
}

const PathwaysClaimContainer = ({ componentId }: IPathwaysClaimContainerProps) => {
  // calling this here to prefetch the pathway challenge so it's updated on the reflections screen
  usePathwayChallenge({ componentId });

  const onClose = useCallback(() => {
    Navigation.popTo(ROUTES.pathways);
  }, []);

  const { todayReward, isStreakComplete } = usePathways(componentId, {
    fetchPolicy: "network-only",
  });

  return <PathwaysClaimScreen onClose={onClose} yucoinReward={todayReward} healthChallenge={isStreakComplete} />;
};

export default memo(PathwaysClaimContainer);
