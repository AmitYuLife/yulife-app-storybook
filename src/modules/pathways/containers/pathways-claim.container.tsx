import { memo } from "react";
import PathwaysClaimScreen from "../screens/pathways-claim/pathways-claim.screen";
import { usePathways } from "../hooks/usePathways";
import { usePathwayChallenge } from "@components/containers/member/quests/challenges-list/hooks/usePathwayChallenge";

interface IPathwaysClaimContainerProps {
  componentId: string;
}

const PathwaysClaimContainer = ({ componentId }: IPathwaysClaimContainerProps) => {
  // calling this here to prefetch the pathway challenge so it's updated on the reflections screen
  usePathwayChallenge({ componentId });

  const { todayReward, isStreakComplete, onReflectionComplete } = usePathways(componentId, {
    fetchPolicy: "network-only",
  });

  return (
    <PathwaysClaimScreen onClose={onReflectionComplete} yucoinReward={todayReward} healthChallenge={isStreakComplete} />
  );
};

export default memo(PathwaysClaimContainer);
