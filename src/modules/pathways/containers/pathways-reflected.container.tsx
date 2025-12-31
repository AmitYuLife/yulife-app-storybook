import { memo, useCallback } from "react";
import PathwaysReflectedScreen from "../screens/pathways-reflected/pathways-reflected.screen";
import { Navigation } from "@navigation/main";

interface IPathwaysReflectedContainerProps {
  componentId: string;
}

const PathwaysReflectedContainer = ({ componentId }: IPathwaysReflectedContainerProps) => {
  const onClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  return <PathwaysReflectedScreen onClose={onClose} />;
};

export default memo(PathwaysReflectedContainer);
