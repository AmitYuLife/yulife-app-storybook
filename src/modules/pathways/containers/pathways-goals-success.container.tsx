import { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import { useBackHandler } from "@hooks";
import PathwaysGoalsSuccessScreen from "../screens/pathways-goals-success.screen";

interface IPathwaysGoalsSuccessContainerProps {
  componentId: string;
}

const PathwaysGoalsSuccessContainer = ({ componentId }: IPathwaysGoalsSuccessContainerProps) => {
  useBackHandler(() => true);

  const onPressCta = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  return <PathwaysGoalsSuccessScreen onPressCta={onPressCta} />;
};

export default memo(PathwaysGoalsSuccessContainer);
