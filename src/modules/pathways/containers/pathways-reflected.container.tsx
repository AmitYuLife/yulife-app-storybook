import { memo, useCallback } from "react";
import PathwaysReflectedScreen from "../screens/pathways-reflected/pathways-reflected.screen";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { usePathways } from "../hooks/usePathways";

interface IPathwaysReflectedContainerProps {
  componentId: string;
}

const PathwaysReflectedContainer = ({ componentId }: IPathwaysReflectedContainerProps) => {
  const { loading, reflectionProgress, currentProgress, isStreakComplete, todayReward } = usePathways(componentId, {
    fetchPolicy: "network-only",
  });

  const onClose = useCallback(() => {
    if (isStreakComplete) {
      Navigation.push(componentId, {
        component: {
          id: ROUTES.pathwaysClaim,
          name: ROUTES.pathwaysClaim,
        },
      });

      return;
    }

    Navigation.popTo(ROUTES.pathways);
  }, [componentId, isStreakComplete]);

  return (
    <PathwaysReflectedScreen
      onClose={onClose}
      isLoading={loading}
      currentProgress={currentProgress}
      isStreakComplete={isStreakComplete}
      reflectionProgress={reflectionProgress}
      todayReward={todayReward}
    />
  );
};

export default memo(PathwaysReflectedContainer);
