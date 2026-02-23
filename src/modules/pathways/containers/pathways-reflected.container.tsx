import { memo, useCallback } from "react";
import PathwaysReflectedScreen from "../screens/pathways-reflected/pathways-reflected.screen";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { usePathways } from "../hooks/usePathways";
import { useBackHandler } from "@hooks";
import { getUserDataStart } from "@redux/user/user.actions";
import { useDispatch } from "react-redux";
import { AppDataType } from "@redux/user/user.types";

interface IPathwaysReflectedContainerProps {
  componentId: string;
}

const PathwaysReflectedContainer = ({ componentId }: IPathwaysReflectedContainerProps) => {
  useBackHandler(() => true);

  const { loading, reflectionProgress, currentProgress, isStreakComplete, todayReward, onReflectionComplete } =
    usePathways(componentId, {
      fetchPolicy: "network-only",
    });

  const dispatch = useDispatch();

  const onClose = useCallback(async () => {
    if (isStreakComplete) {
      dispatch(
        getUserDataStart({
          types: [AppDataType.dailyChallengeAmountAvailable],
        })
      );

      Navigation.push(componentId, {
        component: {
          id: ROUTES.pathwaysClaim,
          name: ROUTES.pathwaysClaim,
        },
      });

      return;
    }

    onReflectionComplete();
  }, [componentId, dispatch, isStreakComplete, onReflectionComplete]);

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
