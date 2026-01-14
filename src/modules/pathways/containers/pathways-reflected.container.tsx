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

  const onClose = useCallback(async () => {
    if (isStreakComplete) {
      Navigation.push(componentId, {
        component: {
          id: ROUTES.pathwaysClaim,
          name: ROUTES.pathwaysClaim,
        },
      });

      return;
    }

    //  Because we are able to get to this screen from the hero card from the daily-steps screen
    //  Pathways route is not always on the stack and the `popTo` will throw an error
    //  This solution allows us to keep going to the pathways screen when possible, and otherwise just go to the root
    //  Which in this case will be daily-steps screen
    try {
      await Navigation.popTo(ROUTES.pathways);
    } catch (error) {
      await Navigation.popToRoot(componentId);
    }
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
